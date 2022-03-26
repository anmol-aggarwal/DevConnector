import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_PROFILE,
  PROFILE_ERROR,
} from './types';

//get current user's profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5005/api/profile/me');
    console.log("profile");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    // // console.log(err);
    // console.log("no profile");
    dispatch({
      type:PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Create or update profile
export const createProfile =
  (formData, navigate, edit = false) =>
  async (dispatch) => {
    try {
      const res = await axios.get('http://localhost:5005/api/profile');

      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });

      dispatch(
        setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success')
      );

      if (!edit) {
        navigate('/dashboard');
      }
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
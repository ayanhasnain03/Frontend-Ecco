import { server } from '../store';
import axios from 'axios';

export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });
    const { data } = await axios.get(`${server}/user/me`, {
      withCredentials: true,
    });
    dispatch({ type: 'loadUserSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'loadUserFail', payload: error.response.data.message });
  }
};

export const logout = () => async dispatch => {
  try {
    const { data } = await axios.post(
      `${server}/user/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'logoutFail',
      payload:
        error.response?.data?.message || 'An error occurred during logout.',
    });
  }
};
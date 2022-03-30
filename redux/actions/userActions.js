import axios from "axios";

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";

export const registerUser = (userDate) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const CONTAINER_URL = `${process.env.API_URL}/account/login`;
    const { data } = await axios.post(
      `${process.env.API_URL}/account/create`,
      userDate
    );
  } catch {}
};

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

import axios from "axios";

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/userConstants";

export const registerUser = (userDate) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const CONTAINER_URL = `${process.env.API_URL}account/create/`;
    const { data } = await axios({
      method: "post",
      url: CONTAINER_URL,
      data: userDate,
    });
    console.log("data", data);
    dispatch({ type: REGISTER_USER_SUCCESS });
  } catch {}
};

export const loginUser = (userDate) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });
    const CONTAINER_URL = `${process.env.API_URL}account/login/`;
    const { data } = await axios({
      method: "post",
      url: CONTAINER_URL,
      data: userDate,
    });
    console.log("data", data);
    dispatch({ type: LOGIN_USER_SUCCESS });
  } catch {}
};

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

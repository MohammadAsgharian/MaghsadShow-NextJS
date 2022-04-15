import axios from "axios";

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
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
    dispatch({ type: REGISTER_USER_SUCCESS });
  } catch {}
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get("api/me");
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch {}
};

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

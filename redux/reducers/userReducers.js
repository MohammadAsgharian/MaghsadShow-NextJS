import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from "../constants/userConstants";

// Auth Reducer
export const authReducer = (
  state = { success: false, error: null, loading: false, user: null },
  action
) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST: {
      return {
        loading: true,
      };
    }

    case LOGIN_USER_SUCCESS: {
      return {
        loading: false,
      };
    }

    case REGISTER_USER_REQUEST: {
      return {
        loading: true,
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
      };
    }
    case REGISTER_USER_FAIL: {
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};

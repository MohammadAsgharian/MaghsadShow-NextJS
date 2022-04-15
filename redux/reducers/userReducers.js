import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
} from "../constants/userConstants";

// Auth Reducer
export const authReducer = (
  state = {
    success: false,
    error: null,
    loading: false,
    isAuthentication: false,
    user: null,
  },
  action
) => {
  switch (action.type) {
    case LOAD_USER_REQUEST: {
      return {
        loading: true,
        isAuthentication: false,
      };
    }

    case LOAD_USER_SUCCESS: {
      return {
        loading: false,
        isAuthentication: true,
        user: action.payload,
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

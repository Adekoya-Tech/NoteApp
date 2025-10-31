import { USER_TYPES } from "../types";
import * as api from "../api";
import { toast } from "react-toastify";

export const userSignIn = (userData) => async (dispatch) => {
  try {
    const { data } = await api.signInUser(userData);
    dispatch({
      type: USER_TYPES.USERS_SIGNIN,
      payload: data.data,
    });
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data.data));
    localStorage.setItem("token", data.token);

    toast.success(data.msg);
    window.location.href = '/notes';
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};
export const userSignUp = (userData) => async (dispatch) => {
  try {
    const { data } = await api.signUpUser(userData);
    dispatch({
      type: USER_TYPES.USERS_SIGNUP,
      payload: data.data,
    });
    console.log(data);

    toast.success(data.msg);
    window.location.href = '/signin';
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};

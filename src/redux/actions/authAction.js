import {
  CREATE_NEW_USER,
  LOGIN_USER,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_PROFILE,
} from "../type";

import { useInsertData } from "../../hooks/useInsertData";
import { useInsUpdateData } from "../../hooks/useUpdateData";

//! create new user
export const createNewUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`api/v1/users/signUp`, data);
    dispatch({
      type: CREATE_NEW_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_USER,
      payload: e.response,
    });
  }
};

//! login  user
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`api/v1/users/login`, data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};

//! update  user data
export const updateUserProfileData = (body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(`api/v1/users/updateMe`, body);
    console.log(response);
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_PROFILE,
      payload: e.response,
    });
  }
};

//! update  user password
export const updateUserPassword = (body) => async (dispatch) => {
  try {
    const response = await useInsUpdateData(
      `api/v1/users/resetPassword/`,
      body
    );

    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: e.response,
    });
  }
};

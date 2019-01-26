import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup =  (formProps, callback) => async (dispatch, getState) => {
  try {
   const response = await axios.post("http://localhost:3080/signup", formProps);
   dispatch({ type: AUTH_USER, payload: response.data.token });
   localStorage.setItem("token", response.data.token); // persist token in localStorage
   callback(); // call the callback on successful signup - to redirect to a private page etc.
 } catch (error) {
   // need to access the response property of error to get the error message
   // the structure of the data is slightly different for existing user errors, hence the OR operator
   let errorMessage = error.response.message || error.response.data.message;
   if(errorMessage.includes("is shorter than the minimum allowed length")) {
     errorMessage = "Please enter a password of 6 or more characters"
   }
   dispatch({ type: AUTH_ERROR, payload: errorMessage });
 }
};


export const signout = () => {
  localStorage.removeItem("token");
  // clear token by changing it to empty string - essentially logging the user out
  return {
    type: AUTH_USER,
    payload: null
  }
}

export const signin =  (formProps, callback) => async (dispatch, getState) => {
  try {
   const response = await axios.post("http://localhost:3080/signin", formProps);
   dispatch({ type: AUTH_USER, payload: response.data.token });
   localStorage.setItem("token", response.data.token); // persist token in localStorage
   callback(); // call the callback on successful signup - to redirect to a private page etc.
 } catch (error) {
   dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
 }
};

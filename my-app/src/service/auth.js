import axios from "axios";
import { BASE_API_URL, USER_TOKEN_KEY } from "../constants";

axios.defaults.baseURL = BASE_API_URL;

export const login = async (requestData) => {
  try {
    const request = await fetch(`${BASE_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const response = await request.json();
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const loginAxios = async (requestData) => {
  try {
    const result = await axios.post("login", requestData);
    return result["data"];
  } catch (err) {
    console.log(err);
  }
};

export const setToken = (token) =>
  sessionStorage.setItem(USER_TOKEN_KEY, token);

export const getToken = () => sessionStorage.getItem(USER_TOKEN_KEY);
export const removeToken = () => sessionStorage.removeItem(USER_TOKEN_KEY);

export const logOut = () => {
  console.log("LogOut");

  sessionStorage.clear();
};

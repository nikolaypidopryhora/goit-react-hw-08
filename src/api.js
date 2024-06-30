import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = token;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const fetchAll = async () => {
  const response = await axios.get("contacts");
  return response.data;
};

export const createContact = async (data) => {
  const response = await axios.post("contacts", data);
  return response.data;
};

export const delContact = async (id) => {
  const response = await axios.delete(`contacts/${id}`);
  return response.data.id;
};

export const updateContact = async (data) => {
  const response = await axios.patch(`contacts/${data.id}`, data.data);
  return response;
};

export const registerApi = async (data) => {
  const response = await axios.post("users/signup", data);
  setAuthHeader(response.data.token);
  return response.data;
};

export const loginApi = async (data) => {
  const response = await axios.post("users/login", data);
  setAuthHeader(response.data.token);
  return response.data;
};

export const logoutApi = async () => {
  await axios.post("/users/logout");
  clearAuthHeader();
};

export const refreshUserApi = async (persistedToken) => {
  const response = await axios.get("users/current");
  setAuthHeader(persistedToken);
  return response.data;
};

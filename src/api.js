import axios from "axios";

const END_POINT_URL = "https://66777b09145714a1bd74d544.mockapi.io/contacts/";

export const fetchAll = async () => {
  const response = await axios.get(END_POINT_URL);
  return response.data;
};

export const createContact = async (data) => {
  const response = await axios.post(END_POINT_URL, data);
  return response.data;
};

export const delContact = async (id) => {
  const response = await axios.delete(END_POINT_URL + id);
  return response.data.id;
};

import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAll, createContact, delContact } from "../../api";
import toast, { Toaster } from "react-hot-toast";
import { logoutApi } from "../../api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await fetchAll();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, thunkAPI) => {
    try {
      return await createContact(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      return await delContact(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "contacts/logout",
  async (data, thunkAPI) => {
    try {
      return await logoutApi(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

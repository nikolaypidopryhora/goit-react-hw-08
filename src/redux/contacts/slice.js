import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, logoutUser } from "./operations";

const errorHandler = (state, action) => {
  state.error = action.payload;
};

const loadingHandler = (state) => {
  state.loading = true;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, loadingHandler)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, errorHandler)
      .addCase(addContact.pending, loadingHandler)
      .addCase(addContact.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, errorHandler)
      .addCase(deleteContact.pending, loadingHandler)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, errorHandler)
      .addCase(logoutUser.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      })
  },
});

export const contactReduser = contactsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

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
        const index = state.items.find((item) => item.id === action.payload);
        state.items.splice(state.items.indexOf(index), 1);
      })
      .addCase(deleteContact.rejected, errorHandler);
  },
});

export const contactReduser = contactsSlice.reducer;

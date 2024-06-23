import { configureStore } from "@reduxjs/toolkit";
import { contactReduser } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filters: filterReducer,
  },
});

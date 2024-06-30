import { createSlice } from "@reduxjs/toolkit";
import { number } from "yup";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
    prepare(value) {
      return {
        payload: {
          name,
        },
      };
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

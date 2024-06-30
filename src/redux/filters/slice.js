import { createSlice } from "@reduxjs/toolkit";
import { number } from "yup";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    value: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    },
    prepare(value) {
      return {
        payload: {
          value,
        },
      };
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

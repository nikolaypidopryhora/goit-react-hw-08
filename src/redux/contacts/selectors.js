import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, filter) => {
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.includes(filter)
    );
  }
);

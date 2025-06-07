import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalized = filter.toLowerCase();
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalized) || number.includes(normalized),
    );
  },
);

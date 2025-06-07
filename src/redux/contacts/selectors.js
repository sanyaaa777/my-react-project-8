import { createSelector } from 'reselect';
import { selectFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts = [], filter = '') => {
    if (!Array.isArray(contacts)) return [];
    const normalized = filter.toLowerCase();

    return contacts.filter(contact =>
      contact?.name?.toLowerCase().includes(normalized)
    );
  }
);

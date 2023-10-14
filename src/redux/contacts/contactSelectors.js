import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filterSelectors';

export const selectContacts = state => state.contacts.items;
export const selectIsloading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return visibleContacts;
  }
);

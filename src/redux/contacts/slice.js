import { createSelector, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';
import { selectContacts } from './selectors';
import { selectNameFilter } from '../filters/selectors';
import { logOut } from '../auth/operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.loading = false;
      })

      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        state.loading = false;
      })

      .addCase(logOut.fulfilled, () => {
        return initialState;
      })

      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.items = state.items.map(item =>
          item.id === payload.id ? payload : item
        );
        state.loading = false;
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.loading = true;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        state => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const contactReducer = contactsSlice.reducer;

//Створюємо складний мемоізований селектор пошуку
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.includes(filter)
    );
  }
);

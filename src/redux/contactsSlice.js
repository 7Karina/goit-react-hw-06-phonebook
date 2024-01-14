import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phoneContacts = {
  items: [
    { id: 'id-1', name: 'Steve Jobs', number: '459-12-56' },
    { id: 'id-2', name: 'Bill Gates', number: '443-89-12' },
    { id: 'id-3', name: 'Elon Musk', number: '645-17-79' },
    { id: 'id-4', name: 'Mark Zuckerberg', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: phoneContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
    prepare(newContact) {
      return {
        payload: { id: nanoid(), ...newContact },
      };
    },
    removeContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

console.log(phoneContacts);

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  { key: 'contacts', storage },
  contactsSlice.reducer
);

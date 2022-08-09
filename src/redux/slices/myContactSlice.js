import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { myContactSlice } from 'redux/slices/myContactSlice';

export const myContactSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContacts(state, action) {
      return [...state, action.payload];
      //   return { ...state, contacts: [...state.contacts, action.payload] };
    },
    removeContacts(state, action) {
      return state.filter(item => item.id !== action.payload);
      //   return {
      //     ...state,
      //     contacts: state.contacts.filter(
      //   contact => contact.id !== action.payload
      // ),
      //   };
    },
  },
});

export const { addContacts, removeContacts } = myContactSlice.actions;

//============работает без redax-persist====================
// import { createSlice } from '@reduxjs/toolkit';

// export const myContactSlice = createSlice({
//   name: 'contacts',
//   initialState: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   reducers: {
//     addContacts(state, action) {
//       return [...state, action.payload];
//     },
//     removeContacts(state, action) {
//       return state.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { addContacts, removeContacts } = myContactSlice.actions;

//===================================================

// import { createSlice } from '@reduxjs/toolkit';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const initialState = {
//   contacts: initialContacts,
//   filter: '',
// };

// export const myContactSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContacts(state, action) {
//       //   return [...state, action.payload];
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     },
//     removeContacts(state, action) {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     },
//     filterContacts(state, action) {
//       return { ...state, filter: action.payload };
//     },
//   },
// });

// export const { addContacts, removeContacts, filterContacts } =
//   myContactSlice.actions;

// // export const myFilterSlice = createSlice({
// //   name: 'filter',
// //   initialState: '',
// //   reducers: {
// //     filterContacts(_, action) {
// //       return action.payload;
// //     },
// //   },
// // });

// // export const { filterContacts } = myFilterSlice.actions;

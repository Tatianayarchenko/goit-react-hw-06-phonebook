import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { myContactSlice } from 'redux/slices/myContactSlice';
import { myFilterSlice } from 'redux/slices/myFilterSlice';
// import { contactsReducer } from 'redux/slices/myContactSlice';

const persistConfig = {
  key: 'items',
  storage,
  //   blacklist: ['filter'],
};

const persistedContactsReducer = persistReducer(
  persistConfig,
  myContactSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: myFilterSlice.reducer,
  },
});

export const persistor = persistStore(store);

// ==========================================================

// ===============работает без redax-persist====================
// import { configureStore } from '@reduxjs/toolkit';
// import { myContactSlice } from 'redux/slices/myContactSlice';
// import { myFilterSlice } from 'redux/slices/myFilterSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: myContactSlice.reducer,
//     filter: myFilterSlice.reducer,
//   },
// });
//=====================================================
// import { createSlice } from '@reduxjs/toolkit';

// const myContactSlice = createSlice({
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

// const myFilterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     filterContacts(_, action) {
//       return action.payload;
//     },
//   },
// });

// export const { addContacts, removeContacts } = myContactSlice.actions;
// export const { filterContacts } = myFilterSlice.actions;
// export default myContactSlice.reducer;

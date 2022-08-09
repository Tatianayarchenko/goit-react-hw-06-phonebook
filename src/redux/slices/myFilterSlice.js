import { createSlice } from '@reduxjs/toolkit';

export const myFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(_, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = myFilterSlice.actions;

// src/reducers/users.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async fetch action
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await fetch('https://example.com/users.json'); // Replace with real endpoint
  const data = await res.json();
  return data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.userList = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;

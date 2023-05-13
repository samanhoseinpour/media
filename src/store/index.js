import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlices';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from './thunks/fetchUsers';
export * from './thunks/addUsers';
export * from './thunks/deleteUsers';

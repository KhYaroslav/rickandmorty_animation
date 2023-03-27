import { configureStore } from '@reduxjs/toolkit';
import rickAndMortySlice from './slices/rickAndMortySlice';

export const store = configureStore({
  reducer: {
    rickAndMorty: rickAndMortySlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


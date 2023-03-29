import { IRickAndMorty, IRickAndMortyState } from '../../types/content';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: IRickAndMortyState = {
  content: [],
  isLoading: false,
  error: ''
}

export const rickAndMortySlice = createSlice({
  name: 'rickAndMorty',
  initialState,
  reducers: {
    contentFetching(state) {
      state.isLoading = true
    },
    contentFetchingSuccess(state, action: PayloadAction<IRickAndMorty[]>) {
      state.isLoading = false;
      state.error = '';
      state.content = action.payload
    },
    contentFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = true;
      state.error = action.payload
    },
  },
})

export const { contentFetching, contentFetchingSuccess, contentFetchingError} = rickAndMortySlice.actions

export default rickAndMortySlice.reducer
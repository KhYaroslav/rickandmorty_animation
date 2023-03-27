import { AppDispatch } from './../store';
import axios from "axios";
import { contentFetching, contentFetchingError, contentFetchingSuccess } from '../slices/rickAndMortySlice';

export const fetchingRickAndMorty = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(contentFetching())
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    dispatch(contentFetchingSuccess(response.data.results))
  } catch (error) {
    const err = error as Error;
    dispatch(contentFetchingError(err.message))
  }
}
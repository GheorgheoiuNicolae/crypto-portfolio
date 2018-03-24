import { StoragePlacesState } from './interface';

export const initialState: StoragePlacesState = {
  exchanges: [],
  userDefined: [],
  status: {
    exchangesAreLoading: false,
    exchangesLoadSuccess: false,
    exchangesLoadError: null,
    userDefinedPlacesOfStorageAreLoading: false,
    userDefinedPlacesOfStorageLoadSuccess: false,
    userDefinedPlacesOfStorageLoadError: null,
  },
};
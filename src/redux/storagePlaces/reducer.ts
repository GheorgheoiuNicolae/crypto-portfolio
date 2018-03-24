import * as types from './types';
import { initialState } from './initialState';
import { StoragePlacesState } from './interface';

export default function reducer(state: StoragePlacesState = initialState, action: any) {
  switch (action.type) {
    case types.LOAD_EXCHANGES_START: {
      return {
        ...state,
        status: {
          ...state.status,
          exchangesAreLoading: true,
          exchangesLoadSuccess: false,
          exchangesLoadError: null,
        }
      };
    }

    case types.LOAD_EXCHANGES_ERROR: {
      return {
        ...state,
        status: {
          ...state.status,
          exchangesAreLoading: false,
          exchangesLoadSuccess: false,
          exchangesLoadError: action.payload,
        }
      };
    }

    case types.LOAD_EXCHANGES_SUCCESS: {
      return {
        ...state,
        exchanges: [
          ...state.exchanges,
          ...action.payload
        ],
        status: {
          ...state.status,
          exchangesAreLoading: false,
          exchangesLoadSuccess: true,
          exchangesLoadError: null,
        }
      };
    }

    // Load users storage places
    case types.LOAD_USER_STORAGE_SPACES_START: {
      return {
        ...state,
        status: {
          ...state.status,
          userDefinedPlacesOfStorageAreLoading: true,
          userDefinedPlacesOfStorageLoadSuccess: false,
          userDefinedPlacesOfStorageLoadError: null,
        }
      };
    }
    case types.LOAD_USER_STORAGE_SPACES_SUCCESS: {
      return {
        ...state,
        userDefined: [
          ...state.userDefined,
          action.payload
        ],
        status: {
          ...state.status,
          userDefinedPlacesOfStorageAreLoading: false,
          userDefinedPlacesOfStorageLoadSuccess: true,
          userDefinedPlacesOfStorageLoadError: null,
        }
      };
    }
    case types.LOAD_USER_STORAGE_SPACES_ERROR: {
      return {
        ...state,
        status: {
          ...state.status,
          userDefinedPlacesOfStorageAreLoading: false,
          userDefinedPlacesOfStorageLoadSuccess: false,
          userDefinedPlacesOfStorageLoadError: action.payload,
        }
      };
    }

    // create storage space
    case types.CREATE_USER_STORAGE_SUCCESS: {
      return {
        ...state,
      };
    }

    case types.CREATE_USER_STORAGE_ERROR: {
      return {
        ...state,
      };
    }

    default: {
      return { ...state };
    }
  }
}
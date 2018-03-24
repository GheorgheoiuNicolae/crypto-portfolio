import * as types from './types';

export const loadExchangesStart = () => ({
  type: types.LOAD_EXCHANGES_START,
});

export const loadExchangesSuccess = (all: any) => {
  return {
    type: types.LOAD_EXCHANGES_SUCCESS,
    payload: all,
  };
};

export const loadExchangesError = (e: any) => {
  return {
    type: types.LOAD_EXCHANGES_ERROR,
    payload: e,
  };
};

export const createUserStorageSuccess = (userStorage: any) => {
  return {
    type: types.CREATE_USER_STORAGE_SUCCESS,
    payload: userStorage,
  };
};
export const createUserStorageError = (e: any) => {
  return {
    type: types.CREATE_USER_STORAGE_ERROR,
    payload: e,
  };
};

export const loadUserStorageSpacesStart = () => ({
  type: types.LOAD_USER_STORAGE_SPACES_START,
});

export const loadUserStorageSpacesSuccess = (all: any) => {
  return {
    type: types.LOAD_USER_STORAGE_SPACES_SUCCESS,
    payload: all,
  };
};

export const loadUserStorageSpacesError = (e: any) => {
  return {
    type: types.LOAD_USER_STORAGE_SPACES_ERROR,
    payload: e,
  };
};
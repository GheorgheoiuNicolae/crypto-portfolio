import * as types from './types';
import { initialState } from './initialState';
import { CryptosState } from './interface';
import { parseCoinData, reduceCoinData } from './parse';

export default function reducer(state: CryptosState = initialState, action: any) {
  switch (action.type) {
    case types.LOAD_CRYPTO_DATA_START: {
      return {
        ...state,
        status: {
          ...state.status,
          cryptosIsLoading: true,
        }
      };
    }

    case types.LOAD_CRYPTO_DATA_SUCCESS: {
      return {
        ...state,
        status: {
          ...state.status,
          cryptosIsLoading: false,
          cryptosLoadSuccess: true,
        },
        data: {
          ...state.data,
          raw: action.payload,
          bySymbol: parseCoinData(action.payload),
          coinList: reduceCoinData(action.payload),
        }
      };
    }

    case types.LOAD_CRYPTO_DATA_ERROR: {
      return {
        ...state,
        status: {
          ...state.status,
          cryptosIsLoading: false,
          cryptosLoadSuccess: false,
          cryptosLoadError: action.payload,
        }
      };
    }

    default: {
      return { ...state };
    }
  }
}
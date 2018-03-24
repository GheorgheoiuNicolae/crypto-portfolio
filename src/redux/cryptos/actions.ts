import * as types from './types';

// Coin information
export const loadCryptoDataStart = () => ({
  type: types.LOAD_CRYPTO_DATA_START,
});

export const loadCryptoDataSuccess = (all: any) => {
  return {
    type: types.LOAD_CRYPTO_DATA_SUCCESS,
    payload: all,
  };
};

export const loadCryptoDataError = (e: any) => {
  return {
    type: types.LOAD_CRYPTO_DATA_ERROR,
    payload: e,
  };
};

// Market information
export const loadMarketDataStart = () => ({
  type: types.LOAD_MARKET_DATA_START,
});

export const loadMarketDataSuccess = (marketStats: any) => {
  return {
    type: types.LOAD_MARKET_DATA_SUCCESS,
    payload: marketStats,
  };
};

export const loadMarketDataError = (e: any) => {
  return {
    type: types.LOAD_MARKET_DATA_ERROR,
    payload: e,
  };
};
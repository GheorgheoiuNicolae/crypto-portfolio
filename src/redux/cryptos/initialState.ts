import { CryptosState } from './interface';

export const initialState: CryptosState = {
  data: {
    raw: [],
    bySymbol: {},
    coinList: [],
  },
  status: {
    cryptosIsLoading: false,
    cryptosLoadSuccess: false,
    cryptosLoadError: null,
    marketInfoIsLoading: false,
    marketInfoLoadSuccess: false,
    marketInfoLoadError: false,
  }
};
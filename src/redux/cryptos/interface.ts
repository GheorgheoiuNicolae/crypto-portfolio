export interface CryptosState {
  data: Data;
  status: Status;
}

interface Status {
  cryptosIsLoading: boolean;
  cryptosLoadSuccess: boolean;
  cryptosLoadError: any;
  marketInfoIsLoading: boolean;
  marketInfoLoadSuccess: boolean;
  marketInfoLoadError: any;
}
interface Data {
  raw: any[];
  bySymbol: {};
  coinList: any[];
}
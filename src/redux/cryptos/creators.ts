// import { firebaseDb } from '../../firebase';
import * as actions from './actions';
import { loadCryptoDataError } from './actions';

let fetchData = {
  method: 'GET',
  headers: new Headers()
};

export const getAllCryptos = () => {
  return function (dispatch: any) {
    dispatch(actions.loadCryptoDataStart());
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=0&convert=USD', fetchData)
    .then(r => r.json())
    .then((res: any) => {
      // dispatch(actions.loadCryptoDataSuccess(parseCoinData(res)));
      dispatch(actions.loadCryptoDataSuccess(res));
      return res;
    })
    .catch((e: any) => {
      dispatch(loadCryptoDataError(e));
    });
  };
};
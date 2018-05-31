import { firebaseDb } from '../../firebase';
import * as actions from './actions';

export const getBalances = (uid: string, portfolioId: string) => {
  return function (dispatch: any) {
    dispatch(actions.loadBalancesStart());
    firebaseDb.ref()
    .child(`balances/${uid}/${portfolioId}`)
    .on('value', (snapshot: any) => {
      const balances = snapshot.val();
      let balancesArr: any = [];
      for (var key in balances) {
        if (balances.hasOwnProperty(key)) {
          balancesArr.push(balances[key]);
        }
      }
      dispatch(actions.loadBalancesSuccess(balancesArr));
    });
  };
};

export const createBalance = (uid: string, portfolioId: string, balance: any) => {
  return function (dispatch: any) {
    let balancesRef: any = firebaseDb
      .ref()
      .child(`balances/${uid}/${portfolioId}`)
      .push();
    let key = balancesRef.getKey();
    balance.id = key;
    balancesRef.set(balance);
  };
};

export const removeBalance = (uid: string, portfolioId: string, balance: any, ) => {
  return function (dispatch: any) {
    firebaseDb
      .ref()
      .child(`balances/${uid}/${portfolioId}/${balance.id}`)
      .remove()
      .then(function(res: any) {
        dispatch(actions.removeBalanceSuccess(balance));
      })
      .catch(function(error: any) {
        dispatch(actions.removeBalanceError(error));
      });
  };
};

export const editBalance = (uid: string, portfolioId: string, data: any) => {
  return function (dispatch: any) {
    firebaseDb
      .ref()
      .child(`balances/${uid}/${portfolioId}/${data.id}`)
      .update(data);
    dispatch(actions.editBalance(data));
  };
};
import { firebaseDb } from '../../firebase';
import * as actions from './actions';

export const getTransactions = (uid: string, portfolioId: string) => {
  return function (dispatch: any) {
    dispatch(actions.loadTransactionsStart());
    firebaseDb.ref()
    .child(`transactions/${uid}/${portfolioId}`)
    .on('value', (snapshot: any) => {
      const transactions = snapshot.val();
      let transactionsArr: any[] = [];

      for (var key in transactions) {
        if (transactions.hasOwnProperty(key)) {
            transactionsArr.push(transactions[key]);
        }
      }
      dispatch(actions.loadTransactionsSuccess(transactionsArr));
    });
  };
};

export const createTransaction = (uid: string, portfolioId: string, transaction: any) => {
  return function (dispatch: any) {
    let transactionRef: any = firebaseDb
      .ref()
      .child(`transactions/${uid}/${portfolioId}`)
      .push();
    let key = transactionRef.getKey();
    transaction.id = key;
    transactionRef.set(transaction);
  };
};

export const removeTransaction = (uid: string, portfolioId: string, transaction: any, ) => {
  return function (dispatch: any) {
    firebaseDb
      .ref()
      .child(`transactions/${uid}/${portfolioId}/${transaction.id}`)
      .remove()
      .then(function(res: any) {
        dispatch(actions.removeTransactionSuccess(transaction));
      })
      .catch(function(error: any) {
        dispatch(actions.removeTransactionError(error));
      });
  };
};

export const editTransaction = (uid: string, portfolioId: string, data: any) => {
  return function (dispatch: any) {
    firebaseDb
      .ref()
      .child(`transactions/${uid}/${portfolioId}/${data.id}`)
      .update(data);
    dispatch(actions.editTransaction(data));
  };
};
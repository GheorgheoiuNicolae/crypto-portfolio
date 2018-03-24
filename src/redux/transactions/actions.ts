import * as types from './types';

// Load Transactions
export const loadTransactionsStart = () => ({
  type: types.LOAD_TRANSACTIONS_START,
});
export const loadTransactionsSuccess = (all: any) => {
  return {
    type: types.LOAD_TRANSACTIONS_SUCCESS,
    payload: all,
  };
};
export const loadTransactionsError = (e: any) => {
  return {
    type: types.LOAD_TRANSACTIONS_ERROR,
    payload: e,
  };
};

// Remove Transaction
export const removeTransactionSuccess = (transaction: any) => {
  return {
    type: types.REMOVE_TRANSACTION_SUCCESS,
    payload: transaction,
  };
};
export const removeTransactionError = (e: any) => {
  return {
    type: types.REMOVE_TRANSACTION_ERROR,
    payload: e,
  };
};

// Edit Transaction
export const editTransaction = (data: any) => ({
  type: types.EDIT_TRANSACTION,
  payload: data,
});
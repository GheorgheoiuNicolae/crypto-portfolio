import * as types from './types';

// Load Balances
export const loadBalancesStart = () => ({
  type: types.LOAD_BALANCES_START,
});
export const loadBalancesSuccess = (all: any) => {
  return {
    type: types.LOAD_BALANCES_SUCCESS,
    payload: all,
  };
};
export const loadBalancesError = (e: any) => {
  return {
    type: types.LOAD_BALANCES_ERROR,
    payload: e,
  };
};

// Remove Balance
export const removeBalanceSuccess = (balance: any) => {
  return {
    type: types.REMOVE_BALANCE_SUCCESS,
    payload: balance,
  };
};
export const removeBalanceError = (e: any) => {
  return {
    type: types.REMOVE_BALANCE_ERROR,
    payload: e,
  };
};

// Edit balance
export const editBalance = (data: any) => ({
  type: types.EDIT_BALANCE,
  payload: data,
});
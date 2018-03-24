import * as types from './types';

export const loadPortfolioStart = () => ({
  type: types.LOAD_PORTFOLIOS_START,
});

export const loadPortfolioSuccess = (all: any) => {
  return {
    type: types.LOAD_PORTFOLIOS_SUCCESS,
    payload: all,
  };
};

export const loadPortfolioError = (e: any) => {
  return {
    type: types.LOAD_PORTFOLIOS_ERROR,
    payload: e,
  };
};

export const createPortfolioSuccess = (portfolio: any) => {
  return {
    type: types.CREATE_PORTFOLIO_SUCCESS,
    payload: portfolio,
  };
};
export const createPortfolioError = (e: any) => {
  return {
    type: types.CREATE_PORTFOLIO_ERROR,
    payload: e,
  };
};

export const editPortfolioSuccess = (portfolio: any) => {
  return {
    type: types.EDIT_PORTFOLIO_SUCCESS,
    payload: portfolio,
  };
};

export const editPortfolioError = (e: any) => {
  return {
    type: types.EDIT_PORTFOLIO_ERROR,
    payload: e,
  };
};

export const removePortfolioSuccess = (res: any) => {
  return {
    type: types.REMOVE_PORTFOLIO_SUCCESS,
    payload: res,
  };
};

export const removePortfolioError = (e: any) => {
  return {
    type: types.REMOVE_PORTFOLIO_ERROR,
    payload: e,
  };
};

export const shouldCreatePortfolio = () => {
  return {
    type: types.SHOULD_CREATE_PORTFOLIO
  };
};
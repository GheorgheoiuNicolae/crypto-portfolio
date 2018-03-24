import * as types from './types';
import { initialState } from './initialState';
import { PortfoliosState } from './interface';

export default function reducer(state: PortfoliosState = initialState, action: any) {
  switch (action.type) {
    case types.LOAD_PORTFOLIOS_START: {
      return {
        ...state,
        status: {
          ...state.status,
          portfoliosAreLoading: true,
          portfoliosLoadSuccess: false,
          portfoliosLoadError: null,
        }
      };
    }

    case types.LOAD_PORTFOLIOS_SUCCESS: {
      return {
        ...state,
        all: [
          ...state.all,
          action.payload
        ],
        status: {
          ...state.status,
          portfoliosAreLoading: false,
          portfoliosLoadSuccess: true,
          portfoliosLoadError: null,
        }
      };
    }

    case types.LOAD_PORTFOLIOS_ERROR: {
      return {
        ...state,
        status: {
          ...state.status,
          portfoliosAreLoading: false,
          portfoliosLoadSuccess: false,
          portfoliosLoadError: action.payload,
        }
      };
    }

    case types.CREATE_PORTFOLIO_SUCCESS: {
      return {
        ...state,
        shouldCreatePortfolio: false,
        all: [
          ...state.all,
          action.payload
        ]
      };
    }

    case types.SHOULD_CREATE_PORTFOLIO: {
      return {
        ...state,
        shouldCreatePortfolio: true,
      };
    }

    default: {
      return { ...state };
    }
  }
}
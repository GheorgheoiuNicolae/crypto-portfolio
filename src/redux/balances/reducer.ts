import * as types from './types';
import * as uiTypes from '../ui/types';
import { initialState } from './initialState';
import { BalancesState } from './interface';

export default function reducer(state: BalancesState = initialState, action: any) {
  switch (action.type) {
    case types.LOAD_BALANCES_START: {
      return {
        ...state,
        status: {
          ...state.status,
          balancesAreLoading: true,
          balancesLoadSuccess: false,
          balancesLoadError: null,
        }
      };
    }

    case types.LOAD_BALANCES_SUCCESS: {
      return {
        ...state,
        data: {
          raw: action.payload,
        },
        status: {
          ...state.status,
          balancesAreLoading: false,
          balancesLoadSuccess: true,
          balancesLoadError: null,
        }
      };
    }

    case types.LOAD_BALANCES_ERROR: {
      return {
        ...state,
        status: {
          ...state.status,
          balancesAreLoading: false,
          balancesLoadSuccess: false,
          balancesLoadError: action.payload,
        }
      };
    }

    case uiTypes.SHOW_MODAL: {
      switch(action.payload) {
        case 'addBalance': {
          return {
            ...state,
            ui: {
              ...state.ui,
              showAddBalanceModal: true,
            }
          };
        }
        default: {
          return { ...state };
        }
      }
    }

    case uiTypes.HIDE_MODAL: {
      switch(action.payload) {
        case 'addBalance': {
          return {
            ...state,
            ui: {
              ...state.ui,
              showAddBalanceModal: false,
            }
          };
        }
        default: {
          return { ...state };
        }
      }
    }

    default: {
      return { ...state };
    }
  }
}

// 1. Cash in
// 2. Cash out
// 3. Transfer
// 4. Buy / Sell
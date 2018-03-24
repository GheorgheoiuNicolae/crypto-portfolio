import * as types from './types';
import * as uiTypes from '../ui/types';
import { initialState } from './initialState';
import { TransactionsState } from './interface';
import { filterTransactionsByTicker} from './parse';

export default function reducer(state: TransactionsState = initialState, action: any) {
  switch (action.type) {
    case types.LOAD_TRANSACTIONS_START: {
      return {
        ...state,
        status: {
          ...state.status,
          transactionsAreLoading: true,
          transactionsLoadSuccess: false,
          transactionsLoadError: null,
        }
      };
    }

    case types.LOAD_TRANSACTIONS_SUCCESS: {
      return {
        ...state,
        data: {
          raw: action.payload,
          byTicker: filterTransactionsByTicker(action.payload)
        },
        status: {
          ...state.status,
          transactionsAreLoading: false,
          transactionsLoadSuccess: true,
          transactionsLoadError: null,
        }
      };
    }

    case types.LOAD_TRANSACTIONS_ERROR: {
      return {
        ...state,
        status: {
          ...state.status,
          transactionsAreLoading: false,
          transactionsLoadSuccess: true,
          transactionsLoadError: null,
        }
      };
    }

    case uiTypes.SHOW_MODAL: {
      switch(action.payload) {
        case 'addTransaction': {
          return {
            ...state,
            ui: {
              ...state.ui,
              showAddTransactionModal: true,
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
        case 'addTransaction': {
          return {
            ...state,
            ui: {
              ...state.ui,
              showAddTransactionModal: false,
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

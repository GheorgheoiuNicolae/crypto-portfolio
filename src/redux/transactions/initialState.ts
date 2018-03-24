import { TransactionsState } from './interface';

export const initialState: TransactionsState = {
  data: {
    raw: [],
    byTicker: []
  },
  ui: {
    showAddTransactionModal: false,
  },
  status: {
    transactionsAreLoading: false,
    transactionsLoadSuccess: false,
    transactionsLoadError: null,
  }
};
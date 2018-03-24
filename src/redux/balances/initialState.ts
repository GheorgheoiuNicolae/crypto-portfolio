import { BalancesState } from './interface';

export const initialState: BalancesState = {
  data: {
    raw: []
  },
  status: {
    balancesAreLoading: false,
    balancesLoadSuccess: false,
    balancesLoadError: null,
  },
  ui: {
    showAddBalanceModal: false,
  }
};
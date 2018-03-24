import { PortfoliosState } from './interface';

export const initialState: PortfoliosState = {
  all: [],
  shouldCreatePortfolio: false,
  status: {
    portfoliosAreLoading: false,
    portfoliosLoadSuccess: false,
    portfoliosLoadError: null,
  },
};
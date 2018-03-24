import { combineReducers } from 'redux';
import { routerReducer as routing, RouterState } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { FormState } from 'redux-form';
import { createResponsiveStateReducer } from 'redux-responsive';

import auth from './auth/reducer';
import { AuthState } from './auth/interface';
import ui from './ui/reducer';
import { UiState } from './ui/interface';
import cryptos from './cryptos/reducer';
import { CryptosState } from './cryptos/interface';
import balances from './balances/reducer';
import { BalancesState } from './balances/interface';
import transactions from './transactions/reducer';
import { TransactionsState } from './transactions/interface';
import portfolios from './portfolios/reducer';
import { PortfoliosState } from './portfolios/interface';
import storagePlaces from './storagePlaces/reducer';
import { StoragePlacesState } from './storagePlaces/interface';

export interface ApplicationState {
  routing: RouterState;
  form: FormState;
  browser: any;
  auth: AuthState;
  ui: UiState;
  cryptos: CryptosState;
  balances: BalancesState;
  transactions: TransactionsState;
  portfolios: PortfoliosState;
  storagePlaces: StoragePlacesState;
}

export const appReducers = combineReducers<ApplicationState>({
  form: formReducer,
  auth,
  ui,
  routing,
  cryptos,
  balances,
  transactions,
  portfolios,
  storagePlaces,
  browser: createResponsiveStateReducer({
    xs: 500,
    sm: 700,
    md: 1000,
    lg: 1280,
    xl: 1400,
  }),
});

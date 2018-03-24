import { firebaseDb } from '../../firebase';
import * as actions from './actions';

export const getPortfolios = (uid: string) => {
  return function (dispatch: any) {
    dispatch(actions.loadPortfolioStart());
    firebaseDb.ref()
    .child(`portfolios/${uid}`)
    .once('child_added', (snapshot) => {
      const portfolios = snapshot ? snapshot.val() : {};
      console.log(' snapshot.val(): ',  snapshot && snapshot.val());
      if(portfolios) {
        dispatch(actions.loadPortfolioSuccess(portfolios));
      } else {
        if (portfolios === null) {
          dispatch(actions.shouldCreatePortfolio());
        }
      }
    });
  };
};

export const createPortfolio = (uid: string, portfolio: any) => {
  return function (dispatch: any) {
    let portfoliosRef: any = firebaseDb
      .ref()
      .child(`portfolios/${uid}`)
      .push();

    let key = portfoliosRef.getKey();
    portfolio.id = key;
    portfoliosRef.set(portfolio, function(error: any) {
      if(error) {
        dispatch(actions.createPortfolioError(error));
      } else {
        dispatch(actions.createPortfolioSuccess(portfolio));
        getPortfolios(uid);
      }
    });
  };
};

export const removePortfolio = (uid: string, portfolio: any ) => {
  return function (dispatch: any) {
    firebaseDb
      .ref()
      .child(`portfolios/${uid}/${portfolio.id}`)
      .remove()
      .then(function(res: any) {
        dispatch(actions.removePortfolioSuccess(portfolio));
      })
      .catch(function(error: any) {
        dispatch(actions.removePortfolioError(error));
      });
  };
};

export const editPortfolio = (uid: string, portfolio: any) => {
  return function (dispatch: any) {
    firebaseDb
      .ref()
      .child(`portfolios/${uid}/${portfolio.id}`)
      .update(portfolio);
    dispatch(actions.editPortfolioSuccess(portfolio));
  };
};
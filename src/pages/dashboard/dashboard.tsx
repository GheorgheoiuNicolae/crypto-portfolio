import { connect } from 'react-redux';
import * as React from 'react';
import { ApplicationState } from '../../redux/reducers';
import FlatButton from 'material-ui/FlatButton';
// actions
import { getAllCryptos } from '../../redux/cryptos/creators';
import { getPortfolios, createPortfolio } from '../../redux/portfolios/creators';
import { getBalances } from '../../redux/balances/creators';
import { getTransactions } from '../../redux/transactions/creators';
import { getExchanges, getUsersStorageSpaces } from '../../redux/storagePlaces/creators';
import { storeExchangesInFB } from '../../utils/storeExchanges';

// import { Box, Flex } from 'grid-styled';
import { Link } from 'react-router';
// icons
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import BalanceIcon from 'material-ui/svg-icons/action/account-balance';
import TransactionsIcon from 'material-ui/svg-icons/action/swap-horiz';
import WatchlistIcon from 'material-ui/svg-icons/action/visibility';
import PortfoliosIcon from 'material-ui/svg-icons/action/book';

const logo = require('../../assets/logo.svg');

interface StateProps {
  auth: any;
  shouldCreatePortfolio: boolean;
  defaultPortfolio: any;
  transactionsStatus: any;
  balanceStatus: any;
  storageSpacesStatus: any;
}
interface DispatchProps {
  getAllCryptos: Function;
  getPortfolios: Function;
  getBalances: Function;
  getTransactions: Function;
  createPortfolio: Function;
  getUsersStorageSpaces: Function;
  getExchanges: Function;
}
interface OwnOptionalProps {}
interface OwnProps extends Partial<OwnOptionalProps> {}

type Props = StateProps & DispatchProps & OwnProps;

class Dashboard extends React.Component<Props, {}> {

  storeExchanges = () => {
    storeExchangesInFB();
  }

  componentWillMount() {
    const { auth, getAllCryptos, getPortfolios,  } = this.props;
    // getBalances, getTransactions
    getAllCryptos();
    if(auth.user.uid) {
      getPortfolios(auth.user.uid);
    }
  }

  componentWillReceiveProps(next: any) {
    const {
      shouldCreatePortfolio,
      auth,
      defaultPortfolio,
      getTransactions,
      getUsersStorageSpaces,
      getBalances,
      transactionsStatus,
      balanceStatus,
      storageSpacesStatus,
      getExchanges,
    } = next;

    if(shouldCreatePortfolio) {
      this.props.createPortfolio(auth.user.uid, {name: 'My Folio'});
    }

    if(defaultPortfolio) {
      // get transactions
      if(!transactionsStatus.transactionsLoadSuccess
        && !transactionsStatus.transactionsAreLoading) {
          getTransactions(auth.user.uid, defaultPortfolio.id);
      }

      // get balances
      if(!balanceStatus.balancesLoadSuccess
        && !balanceStatus.balancesAreLoading) {
          getBalances(auth.user.uid, defaultPortfolio.id);
      }

      // get storage places
      if(!storageSpacesStatus.exchangesLoadSuccess
        && !storageSpacesStatus.exchangesAreLoading) {
        getExchanges();
      }

      // get user defined storages
      if(!storageSpacesStatus.userDefinedPlacesOfStorageAreLoading
        && !storageSpacesStatus.userDefinedPlacesOfStorageLoadSuccess) {
        getUsersStorageSpaces(auth.user.uid);
      }
    }
  }

  render() {
    const { children, auth } = this.props;
    return (
      <section className="Dashboard">
        <section className="App-Sidebar">
          <div className="sidebar-content">
            <div className="sidebar-header">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="sidebar-menu">
              <Link to="/" >
                <FlatButton className="menu-button" >
                  <DashboardIcon className="menu-icon" />
                  <span>Dashboard</span>
                </FlatButton>
              </Link>
              <Link to="/transactions" >
                <FlatButton className="menu-button">
                  <TransactionsIcon className="menu-icon" />
                  <span>Transactions</span>
                </FlatButton>
              </Link>
              <Link to="/balance" >
                <FlatButton className="menu-button">
                    <BalanceIcon className="menu-icon" />
                    <span>Balance</span>
                </FlatButton>
              </Link>
              <Link to="/watchlist" >
                <FlatButton className="menu-button">
                  <WatchlistIcon className="menu-icon" />
                  <span>Watchlist</span>
                </FlatButton>
              </Link>
              <Link to="/portfolios" >
                <FlatButton className="menu-button">
                  <PortfoliosIcon className="menu-icon" />
                    <span>Portfolios</span>
                </FlatButton>
              </Link>
            </div>
            {auth.user.email === 'accounts@gheorgheoiu.com' && (
              <div className="admin-tools" >
                <h3 onClick={() => this.storeExchanges()}>Store exchanges</h3>
              </div>
            )}
          </div>
        </section>
        <section className="App-Content">
          {children}
        </section>
      </section>
    );
  }
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      auth: state.auth,
      shouldCreatePortfolio: state.portfolios.shouldCreatePortfolio,
      defaultPortfolio: state.portfolios.all[0],
      balanceStatus: state.balances.status,
      transactionsStatus: state.transactions.status,
      storageSpacesStatus: state.storagePlaces.status,
    };
  },
  {
    getAllCryptos,
    getPortfolios,
    getBalances,
    getTransactions,
    createPortfolio,
    getUsersStorageSpaces,
    getExchanges,
  },
)(Dashboard);

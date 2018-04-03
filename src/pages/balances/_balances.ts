import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import Balances from './balances';
import { hideModal, showModal } from '../../redux/ui/actions';

export interface StateProps {
  balances: any[];
  transactions: any[];
  balancesLoaded: boolean;
  transactionsLoaded: boolean;
}

export interface DispatchProps {
  hideModal: Function;
  showModal: Function;
}

export interface OwnProps {}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      balances: state.balances.data.raw,
      transactions: state.transactions.data.raw,
      balancesLoaded: state.balances.status.balancesLoadSuccess,
      transactionsLoaded: state.transactions.status.transactionsLoadSuccess
    };
  },
  {
    hideModal,
    showModal
  },
)(Balances);

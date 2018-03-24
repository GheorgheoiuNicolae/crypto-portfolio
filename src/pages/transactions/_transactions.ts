import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import Transactions from './transactions';
import { hideModal, showModal } from '../../redux/ui/actions';

export interface StateProps {
  transactions: any[];
}

export interface DispatchProps {
  hideModal: Function;
  showModal: Function;
}

export interface OwnProps {}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      transactions: state.transactions.data.raw,
    };
  },
  {
    hideModal,
    showModal
  },
)(Transactions);

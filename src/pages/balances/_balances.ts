import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import Balances from './balances';
import { hideModal, showModal } from '../../redux/ui/actions';

export interface StateProps {
  balances: any[];
}

export interface DispatchProps {
  hideModal: Function;
  showModal: Function;
}

export interface OwnProps {}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      balances: state.balances.data.raw
    };
  },
  {
    hideModal,
    showModal
  },
)(Balances);

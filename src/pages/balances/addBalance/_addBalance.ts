import { connect } from 'react-redux';
import { ApplicationState } from '../../../redux/reducers';
import AddBalanceForm from './addBalance';
import { reduxForm } from 'redux-form';
import { createBalance } from '../../../redux/balances/creators';
import { hideModal, showModal } from '../../../redux/ui/actions';
import { resetForm } from '../../../redux/ui/creators';

export interface OwnOptionalProps {
  handleSubmit?: any;
  array: any;
  initialValues: any;
  destroy: any;
  reset: any;
}

export interface OwnProps extends Partial<OwnOptionalProps> {}

export interface StateProps {
  auth: any;
  showAddBalanceModal: boolean;
  portfolio: any;
}

export interface DispatchProps {
  createBalance: Function;
  hideModal: Function;
  showModal: Function;
  resetForm: Function;
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      auth: state.auth,
      portfolio: state.portfolios.all,
      showAddBalanceModal: state.balances.ui.showAddBalanceModal,
    };
  },
  {
    createBalance,
    hideModal,
    showModal,
    resetForm
  },
)(reduxForm({
  form: 'addBalance',
  initialValues: {
    createdAt: new Date(),
  }
})(AddBalanceForm));

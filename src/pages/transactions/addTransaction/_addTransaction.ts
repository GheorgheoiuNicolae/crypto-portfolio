import { connect } from 'react-redux';
import { ApplicationState } from '../../../redux/reducers';
import AddTransactionForm from './addTransaction';
import { reduxForm } from 'redux-form';
import { createTransaction } from '../../../redux/transactions/creators';
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
  showAddTransactionModal: boolean;
  currencies: any;
  storagePlaces: any;
  portfolio: any;
}

export interface DispatchProps {
  createTransaction: Function;
  hideModal: Function;
  showModal: Function;
  resetForm: Function;
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      auth: state.auth,
      portfolio: state.portfolios.all,
      showAddTransactionModal: state.transactions.ui.showAddTransactionModal,
      currencies: state.cryptos.data.coinList,
      storagePlaces: state.storagePlaces
    };
  },
  {
    createTransaction,
    hideModal,
    showModal,
    resetForm
  },
)(reduxForm({
  form: 'addTransaction',
  initialValues: {
    createdAt: new Date(),
    date: new Date()
  }
})(AddTransactionForm));

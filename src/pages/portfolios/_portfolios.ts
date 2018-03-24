import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import Portfolios from './portfolios';

export interface StateProps {}

export interface DispatchProps {}

export interface OwnProps {}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {};
  },
  {

  },
)(Portfolios);

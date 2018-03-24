import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import Overview from './overview';

export interface StateProps {}

export interface DispatchProps {}

export interface OwnProps {}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {};
  },
  {

  },
)(Overview);

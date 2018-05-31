import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import Portfolios from './portfolios';

export interface StateProps {}
export interface DispatchProps {}
export interface OwnProps {}

function mapStateToProps(state: ApplicationState) {
  return {
    // name: state.user.name,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    // onNameChanged: (name) => dispatch({ type: 'NAME_CHANGED', payload: name }),
  };
}
export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Portfolios);

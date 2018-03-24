import { connect } from 'react-redux';
import { ApplicationState } from '../../../redux/reducers';
import CoinPerformance from './coinPerformance';

import { Totals } from '../../../data';

export interface StateProps {
  totals: any;
}

export interface DispatchProps {}

export interface OwnProps {}

export default connect<StateProps, DispatchProps, OwnProps>(
    (state: ApplicationState) => {
        return {
          totals: Totals
        };
    },
    {
    },
)(CoinPerformance);

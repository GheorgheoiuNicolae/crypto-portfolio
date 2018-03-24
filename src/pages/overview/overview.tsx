import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_overview';
// import FlatButton from 'material-ui/FlatButton';
import { Box, Flex } from 'grid-styled';
// icons
// import DashboardIcon from 'material-ui/svg-icons/action/dashboard';

import PortfolioStatus from './portfolioStatus';
import CoinPerformance from './coinPerformance';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Overview extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div className="Overview">
        <h1 className="page-header">Overview</h1>
          <Flex className="page-content">
            <Box width={1} p={20}>
              <h2>Portfolio changes</h2>
              <PortfolioStatus />
            </Box>
            <Box width={1} p={20}>
              <h2>Your holdings</h2>
              <PortfolioStatus />
            </Box>
          </Flex>
          <Flex className="page-content">
              <Box width={1} p={20}>
                <h2>Coin prformance</h2>
                <CoinPerformance />
              </Box>
              <Box width={1} p={20}>
                <h2>Coin prformance</h2>
                <CoinPerformance />
              </Box>
          </Flex>
      </div>
    );
  }
}

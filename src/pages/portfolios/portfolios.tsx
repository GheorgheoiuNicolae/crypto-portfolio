import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_portfolios';
// import FlatButton from 'material-ui/FlatButton';
// import { Box, Flex } from 'grid-styled';
// icons
// import DashboardIcon from 'material-ui/svg-icons/action/dashboard';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Portfolios extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div className="Portfolios">
        <h1>Portfolios</h1>
      </div>
    );
  }
}

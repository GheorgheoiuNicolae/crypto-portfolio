import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_watchlist';
// import FlatButton from 'material-ui/FlatButton';
// import { Box, Flex } from 'grid-styled';
// icons
// import DashboardIcon from 'material-ui/svg-icons/action/dashboard';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Watchlist extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div className="Watchlist">
        <h1>Watchlist</h1>
      </div>
    );
  }
}

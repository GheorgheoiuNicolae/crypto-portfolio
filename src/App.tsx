import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './AppContainer';

import './App.css';

export type Props = StateProps & OwnProps & DispatchProps;

export default class App extends React.PureComponent<Props, {}> {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { calculateResponsiveState } = this.props;
    calculateResponsiveState(window);

    requestAnimationFrame(() => {
      this.setState({ appIsMounted: true });
    });

    window.addEventListener('resize', () => calculateResponsiveState(window));
  }

  componentWillUnmount() {
    const { calculateResponsiveState } = this.props;
    window.removeEventListener('resize', () => calculateResponsiveState(window));
  }

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

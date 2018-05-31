import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './AppContainer';
import { fireStore } from './firebase';
import './assets/styles/App.css';

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

    console.log('app component mounted');
    fireStore.collection('users').add({
      first: 'Test1234',
      last: '1234',
      born: 3333
    })
    .then(function(docRef: any) {
      console.log('Document written with ID: ' , docRef.id);
    })
    .catch(function(error: any) {
      console.error('Error adding document: ' , error);
    });

    fireStore.collection('users').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log('doc: ', doc.data());
      });
    });
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

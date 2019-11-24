import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Calculator from './components/Calculator';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Calculator />
      </Provider> 
    );
  }
} 
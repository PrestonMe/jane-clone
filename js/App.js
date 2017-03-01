import React from 'react';
import { render } from 'react-dom';
import { Match} from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Match exactly pattern="/" />
      </div>
    </Provider>

  )
}

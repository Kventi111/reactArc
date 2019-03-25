import React from 'react';
import ReactDOM from 'react-dom';
import Application from './application'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
  );
}

renderApp()


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './index.module.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <div>
      <App/>
    </div>
  </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './components/app/app';
import { store } from './components/store';
import { fetchTreeRowsAction } from './components/store/api-actions';
import { Provider } from 'react-redux';

store.dispatch(fetchTreeRowsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();

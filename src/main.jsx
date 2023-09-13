import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store.js';
import { Provider } from 'react-redux';
import Router from './Router/Router.jsx';
import './index.css';
import MyThemeProvider from './styles/MyThemeProvider/MyThemeProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MyThemeProvider>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </MyThemeProvider>
  </Provider>
);

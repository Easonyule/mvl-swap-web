import React from 'react';

import ReactDOM from 'react-dom';

import './reset.css';
import { initializeI18next } from './i18n/index';
import GlobalStyle from './style/GlobalStyle';
import ThemeProvider from './style/ThemeProvider';
import ReduxProvider from './store/ReduxProvider';
import App from './App';

initializeI18next();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

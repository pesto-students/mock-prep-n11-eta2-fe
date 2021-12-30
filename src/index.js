import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/store';
import * as Sentry from "@sentry/react";
import { Provider } from 'react-redux';
import { CookiesProvider } from "react-cookie";
import { sentrydsn } from 'constant/const_url';
import { Integrations } from "@sentry/tracing";

// Sentry.init({
//   dsn: sentrydsn,
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0,
// });


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

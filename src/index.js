import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import App from './App';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import UserProvider from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Provider store={store}>
          <ToastProvider>
            <App />
          </ToastProvider>
        </Provider>
      </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

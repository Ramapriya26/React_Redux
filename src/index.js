import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

// const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ Store }>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



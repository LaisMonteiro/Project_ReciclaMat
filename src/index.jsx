import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import store from './app/store';
// import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
<<<<<<< HEAD
    <App />
=======
<<<<<<< HEAD
      <App />
=======
    <App />
>>>>>>> 8e2e76e5d86f4d267bcb1319d49a9f094a839b2f
>>>>>>> 713ed7751a83246cdd66f8435cc54aa573489fb6
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

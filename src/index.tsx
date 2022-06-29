import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
//import { rootReducer } from './redux/reducers';
//import { compose, createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import {initStore} from './redux/store'

const store = initStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

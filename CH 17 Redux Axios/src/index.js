import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './store';
import List from "./List";

const client = axios.create({
  baseURL:'http://localhost:3000/',
  responseType: 'json'
});

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(
    axiosMiddleware(client)
  )
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <List />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
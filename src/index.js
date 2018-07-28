import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import {  Provider } from "react-redux";
import reducer from "./reducers";

import { App } from "./components/App";

const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root'));

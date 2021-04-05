import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import attorneysReducer from './reducers/attorneysReducer'
import reportWebVitals from './reportWebVitals';

const store = createStore(attorneysReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}></Provider>
    <App />
  <Provider />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

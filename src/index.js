import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import campDetailsReducer from './store/reducers/CampDetailsReducer';
import campSelectionReducer from './store/reducers/CampSelectionReducer';
import authReducer from './store/reducers/authReducer';

const rootReducer = combineReducers({
   campDtls: campDetailsReducer,
   campSlc: campSelectionReducer,
   auth: authReducer,
})
const composedEnhancers = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, composedEnhancers);

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

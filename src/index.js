import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';

import homeReducer from './Store/reducers/homeReducer';
import galleryReducer from './Store/reducers/galleryReducer';
import mySaga from './Sagas/rootSaga';

import App from './Containers/App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  homeReducer,
  galleryReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(mySaga);

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

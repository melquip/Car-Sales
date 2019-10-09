import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './state/reducers';
import throttle from 'lodash/throttle';
import * as storage from './helpers/localStorageState';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(
	combineReducers({
		app: reducers.appReducer,
	}),
	storage.loadState(),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(throttle(() => {
	storage.saveState(store.getState())
}, 1000));

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);

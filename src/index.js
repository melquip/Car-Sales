import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import * as storage from './helpers/localStorageState';
import throttle from 'lodash/throttle';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(
	combineReducers({
		additionalPrice: reducers.addPriceReducer,
		car: reducers.carReducer,
		store: reducers.storeReducer
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

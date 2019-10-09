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
/*
import axiosWithAPIAuth from './helpers/axiosWithAPIAuth';

const params = `?api_key=${process.env.REACT_APP_CAR_API_KEY}&car_type=new`
axiosWithAPIAuth().get(`https://marketcheck-prod.apigee.net/v1/popular/cars${params}`)
.then(response => {
	console.log(response);
}).catch(error => {
	console.log('error', error)
})
*/
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

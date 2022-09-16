import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

// feeling reducer
const feeling = (state = '', action) => {
    if (action.type === 'SET_FEELING') {
        // dispatch will have type of 'SET_FEELING'
        // and payload with the value to set
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

// understanding reducer
const understanding = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        // dispatch will have type of 'SET_UNDERSTANDING'
        // and payload with the value to set
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

// support reducer
const support = (state = '', action) => {
    if (action.type === 'SET_SUPPORT') {
        // dispatch will have type of 'SET_SUPPORT'
        // and payload with the value to set
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

// comments reducer
const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        // dispatch will have type of 'SET_COMMENTS'
        // and payload with the value to set
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

// Redux store! Keeps track of all reducers
const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

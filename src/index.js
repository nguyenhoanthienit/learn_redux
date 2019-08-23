import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import productsReducer from './reducers/products-reducer';
import usersReducer from './reducers/users-reducer';


const allReducers = combineReducers({
    products : productsReducer,
    users : usersReducer
});

const store = createStore(
    allReducers, 
    {
        products: [{name: 'iPhone'}],
        users: 'TestUser'
    },
    window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();

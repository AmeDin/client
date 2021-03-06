import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// const middleware = [thunk];

// const store = createStore(rootReducer, 
//     compose(
//         applyMiddleware(...middleware)
//     )
// );
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

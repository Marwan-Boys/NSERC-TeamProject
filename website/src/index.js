import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from "./store/reducers/rootReducer";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import 'firebase/auth'
import 'firebase/firestore'
import { getFirestore, reduxFirestore} from 'redux-firestore';
import { reactReduxFirebase, getFirebase} from "react-redux-firebase";
import firebaseConfig from './config/firebaseConfig'
import * as firebase from 'firebase'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebase,firebaseConfig)
    )
);

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
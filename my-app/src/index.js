import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/State.js';

let ReRender = () => {
    ReactDOM.render(<React.StrictMode><App Info={store.getState()} dispatch={store.dispatch.bind(store)} /></React.StrictMode>, document.getElementById('root'));
}

ReRender(store.getState());

store.subscribe(ReRender);

serviceWorker.unregister();

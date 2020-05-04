import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store.js';
import { Provider } from 'react-redux';

ReactDOM.render(<React.StrictMode>
    <Provider store={store}>
        <App Info={store.getState()} dispatch={store.dispatch.bind(store)} />
    </Provider>
</React.StrictMode>, document.getElementById('root'));


serviceWorker.unregister();


// props App.js Info={store.getState()} dispatch={store.dispatch.bind(store)} 
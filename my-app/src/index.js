import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store.js';
import { Provider } from './StoreContext.js';

let ReRender = () => {
    ReactDOM.render(<React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>, document.getElementById('root'));
}

ReRender(store.getState());

store.subscribe(() => {
    let state = store.getState();
    ReRender(state);
});

serviceWorker.unregister();


// props App.js Info={store.getState()} dispatch={store.dispatch.bind(store)} 
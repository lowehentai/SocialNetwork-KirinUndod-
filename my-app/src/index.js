import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State.js';
import { addPost } from './Redux/State.js';

ReactDOM.render(<React.StrictMode><App Info={state} addPost={addPost} /></React.StrictMode>, document.getElementById('root'));

serviceWorker.unregister();

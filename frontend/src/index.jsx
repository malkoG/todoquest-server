import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
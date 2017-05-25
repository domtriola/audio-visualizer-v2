import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Root from './components/Root';
import configureStore from './store/store';

const store = configureStore();
const root = document.getElementById('root');

ReactDOM.render(<Root store={store} />, root);
registerServiceWorker();

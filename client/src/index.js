import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store/ConfigureStore'
import initialStore from './redux/store/InitialStore'
import { Provider } from 'react-redux'

const store = configureStore(initialStore)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

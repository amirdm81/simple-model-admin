import React from 'react';
import ReactDOM from 'react-dom';
// Theme files
import './assets/css/bootstrap.min.css';
import './assets/css/hamburgers.min.css';
import './assets/css/font-face.css';
import './assets/css/theme.css';
// Ionicons files
import 'ionicons/dist/css/ionicons.min.css';
// Redux setup
import {Provider} from 'react-redux';
import store from './components/store';

// App files
import App from './components/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('app')
);
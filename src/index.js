import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter,Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.scss'
import App from "./App";


const app = (
		<App />
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
/**
 * Created by elod on 4/8/16.
 */

import './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

main();

function main() {
    const app = document.createElement('div');

    document.body.appendChild(app);

    ReactDOM.render(<App />, app);

}
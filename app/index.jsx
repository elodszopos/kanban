/**
 * Created by elod on 4/8/16.
 */

import './css/main.css';

import alt from './libs/alt';
import storage from './libs/storage';

import 'es6-shim';
import 'es7-shim';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

main();

function main() {
    const app = document.createElement('div');

    document.body.appendChild(app);

    ReactDOM.render(<App />, app);

}
import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux'; //"{} === var createStore = redux.createStore... "
import allReducers from './reducers'

const store = crateStore(allReducers);

ReactDOM.render(<h1> Hello HI</h1>, document.getElementById('root'));

import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux'; //"{} === var createStore = redux.createStore... "

const store = crateStore();


ReactDOM.render(<h1> Hello HI</h1>, document.getElementById('root'));

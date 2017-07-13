import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from './components/App';
import TodoAPI from './api/TodoAPI';

import actions from "./actions/actions";
const store = require('./store/configureStore').configure();

import "style-loader!css-loader!sass-loader!./styles/app.scss";
require ('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();


// store.subscribe(() => {
//     const state = store.getState();
//     console.log('New state: ', state);
//     TodoAPI.setTodos(state.todos);
//     }
// );
//
// const initialTodos = TodoAPI.getTodos(); //vozvrawaet todos iz localStorage; esli ix tam net, vernet pustoy massiv
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);



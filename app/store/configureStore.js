import { combineReducers, applyMiddleware, createStore } from 'redux';
import { searchTextReducer, showCompletedReducer, todosReducer} from "../reducers/reducers";
import thunk from 'redux-thunk';

export const configure = () => {
    const reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer, composeEnhancers(
            applyMiddleware(thunk)
    ));

    return store;
};
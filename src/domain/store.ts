import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todos, visibilityFilter } from './reducer';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

const reducer = combineReducers({
    todoModal: todos,
    visibilityFilter,
});

export default createStore(reducer, composeWithDevTools(applyMiddleware(loggerMiddleware)));

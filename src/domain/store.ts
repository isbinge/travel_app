import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from './reducer';

const reducer = combineReducers({
    todoModal: todos,
    visibilityFilter,
});

export default createStore(reducer);

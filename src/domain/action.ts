import { TodoItem } from './todo.d';

export const ADD_TODO = 'ADD_TODO';

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const addTodo = (payload: { title: string }) => ({
    type: ADD_TODO,
    payload,
});

export const toggleTodo = (payload: any) => ({
    type: TOGGLE_TODO,
    payload,
});

export const setVisibilityFilter = (payload: { filter: string }) => ({ type: SET_VISIBILITY_FILTER, payload });

import update from 'immutability-helper';
import { v1 as uuidv1 } from 'uuid';

import { TodoItem, TodoModal, Action } from './todo.d';
import { VisibilityFilters, ADD_TODO, TOGGLE_TODO } from './action';

export const todos = (state: TodoModal = { todos: [] }, action: Action) => {
    switch (action.type) {
        case ADD_TODO: {
            return update(state, {
                todos: {
                    $splice: [[0, 0, { id: uuidv1(), title: (action.payload as TodoItem)?.title, completed: false }]],
                },
            });
        }
        case TOGGLE_TODO: {
            return update(state, {
                todos: {
                    $apply: (todos: TodoItem[]) =>
                        todos.map((todo) => {
                            if (todo.id === (action.payload as { id: string }).id) {
                                return { ...todo, completed: true };
                            }
                            return todo;
                        }),
                },
            });
        }
        default:
            return state;
    }
};

export const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: Action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return (action.payload as { filter: string }).filter;
        default:
            return state;
    }
};

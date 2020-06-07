import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, VisibilityFilters } from '../../domain/action';
import TodoList from './components/TodoList';
import { TodoItem } from '../../domain/todo';
import { useParams } from 'react-router';

const VisibleTodoList: React.FC = () => {
    const dispatch = useDispatch();
    const [todoModal] = useSelector(({ todoModal }) => [todoModal]);
    const { filter } = useParams();
    const handleToggleTodo = (id: string) => {
        dispatch(toggleTodo({ id }));
    };
    console.log(todoModal.todos, filter);

    const getVisibleTodos = (todos: TodoItem[], filter: string) => {
        switch (filter) {
            case VisibilityFilters.SHOW_COMPLETED:
                return todos.filter((t) => t.completed);
            case VisibilityFilters.SHOW_ACTIVE:
                return todos.filter((t) => !t.completed);
            default:
                return todos;
        }
    };
    return (
        <div>
            <TodoList todos={getVisibleTodos(todoModal.todos, filter ?? 'SHOW_ALL')} onClick={handleToggleTodo} />
        </div>
    );
};

export default VisibleTodoList;

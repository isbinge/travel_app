import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from './domain/todo';

interface TodoListProps {
    todos: TodoItem[];
}
const TodoList: React.FC<TodoListProps> = (props) => {
    const { todos } = props;

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}> {todo.title}</li>
            ))}
        </ul>
    );
};

const App = () => {
    const dispatch = useDispatch();
    const [todoModal, visibilityFilter] = useSelector(({ todoModal, visibilityFilter }) => [
        todoModal,
        visibilityFilter,
    ]);
    return <div></div>;
};

export default App;

import React from 'react';
import { TodoItem } from '../../../domain/todo';

interface TodoListProps {
    todos: TodoItem[];
    onClick: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = (props) => {
    const { todos, onClick } = props;

    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    onClick={() => {
                        onClick(todo.id);
                    }}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};
export default TodoList;

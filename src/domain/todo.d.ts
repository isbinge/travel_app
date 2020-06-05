interface TodoItem {
    id: string;
    title: string;
    completed: boolean;
}

interface TodoModal {
    todos: TodoItem[];
}
interface Action {
    type: string;
    payload?: unknown;
}
export { TodoItem, TodoModal, Action };

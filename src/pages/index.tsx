import React from 'react';
import AddTodo from './todo/AddTodo';
import VisibleTodoList from './todo/VisibleTodoList';
import Footer from './todo/components/Footer';

const App: React.FC = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
};
export default App;

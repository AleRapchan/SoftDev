import React from 'react';
//import TodoItem from '.. /TodoItem/TodoItem';

const TodoList = ( { todos }) => (
    <div>
        {todos.map( (t, i) => (
            <div key={i}>{t.title}</div>
        ))}
    </div>
);

export default TodoList;
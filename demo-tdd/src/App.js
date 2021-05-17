import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App () {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json()
      );
      setTodos (result.slice(0, 5));
      setLoading(false);
  }
  fetchData();
}, []);

  return (
    <div className="App">
      <h1 className="header">My todo list</h1>
      {loading ? 'Loading' : <TodoList todos={todos} />}
      {/* {<TodoList todos={todos} />} */}
    </div>
  );
}

export default App;
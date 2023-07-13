import React, { useEffect, useState } from 'react';

const TodoDashboard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Make a fetch request to get the user's todos
    const fetchTodos = async () => {
      try {
        const response = await fetch('/todos');
        if (response.ok) {
          const todosData = await response.json();
          setTodos(todosData);
        } else {
          // Handle error
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo Dashboard</h1>
      {/* Display the todos */}
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoDashboard;

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Simulate fetching data on mount
  useEffect(() => {
    const initialTodos = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Build a demo app with Vite', completed: false },
    ];
    setTodos(initialTodos);
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <ThemeProvider>
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>
        <Header />
        <h2>Todo List</h2>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
    </ThemeProvider>
  );
};

export default App;

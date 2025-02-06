
/*
* create a header to display the Theme context
* create a TodoForm and TodoList complete to show CRUD functionality
* */

import {useState} from "react";
import TodoList from "./components/TodoList.jsx";

const App = () => {

  // we need global state for the todos, toggleTodos and deleting todos
  // we need global state for the theme and toggle theme as well

  const [todos, setTodos] = useState([
    {id: 1, todoText: "walk the dog", completed: false},
    {id: 2, todoText: "clean the tub", completed: false},
  ]);

  const toggleTodo = (id) => {
    setTodos( prevState => {

        return prevState.map( todo => {
           if( todo.id === id) {
             return { ...todo, completed: !todo.completed}
           }

           return todo;
        });

    });
  };

  const deleteTodo = (id) => {
    setTodos(prevState =>
      prevState.filter( todo => todo.id !== id)
    );
  }

  return (
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>
        <h2>Todo List</h2>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </div>
  );
};

export default App;

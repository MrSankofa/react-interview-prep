
/*
* create a header to display the Theme context
* create a TodoForm and TodoList complete to show CRUD functionality
* */

import {useState} from "react";
import TodoList from "./components/TodoList.jsx";
import TodoForm from "./components/TodoForm.jsx";
import {ThemeProvider} from "./context/ThemeContext.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

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

  const addTodo = (todoText) => {
    setTodos( prevState => [...prevState, {
      todoText,
      id: Date.now(),
      completed: false
    }])
  }

  return (
    <ThemeProvider>
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>
        <Header/>
        <TodoForm addTodo={addTodo}/>
        <h2>Todo List</h2>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
};

export default App;

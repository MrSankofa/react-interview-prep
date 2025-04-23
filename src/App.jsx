
/*
* create a header to display the Theme context
* create a TodoForm and TodoList complete to show CRUD functionality
* */
import Header from "./components/header/header.jsx";
import ToDoForm from "./components/todo-form/ToDoForm.jsx";
import ToDoList from "./components/todo-list/ToDoList.jsx";
import {useEffect, useState} from "react";
const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const initializeTodos = [
      {id: 1, text: 'Learn React', completed: false},
      {id: 2, text: 'pass technical interview', completed: false},
    ];

    setTodos(initializeTodos);
  }, []);


  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }

    setTodos(prev => [...prev, newTodo]);
  }

  const toggleCompleted = (todoId) => {
    setTodos( prev => prev.map( todo => {
      if(todo.id === todoId) {
        return {...todo, completed: !todo.completed };
      }
      return todo;
      }
    ))

    console.log("Todos: ", todos);
  }

  return (
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>

        <Header/>
        <ToDoForm addTodo={addTodo}/>
        <ToDoList todos={todos} toggleCompleted={toggleCompleted}/>
      </div>
  );
};

export default App;

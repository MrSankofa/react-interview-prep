
/*
* create a header to display the Theme context
* create a TodoForm and TodoList complete to show CRUD functionality
* */

import {useState} from "react";
import TodoList from "./components/TodoList.jsx";

const App = () => {

  // we need global state for todos and theme

  const [todos, setTodos] = useState([
    { id:1,  todoText: "Take out the trash", completed: false},
    { id:2,  todoText: "Wash the dishes", completed: false},
  ]);


  return (
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>
        <h2>Todo List</h2>
        <TodoList todos={todos}></TodoList>
      </div>
  );
};

export default App;

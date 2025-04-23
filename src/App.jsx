
/*
* create a header to display the Theme context
* create a TodoForm and TodoList complete to show CRUD functionality
* */
import Header from "./components/header/header.jsx";
import ToDoForm from "./components/todo-form/ToDoForm.jsx";
import ToDoList from "./components/todo-list/ToDoList.jsx";
import {useEffect, useState} from "react";
import {ThemeProvider} from "./global/ThemeContext.jsx";
const App = () => {


  return (
    <ThemeProvider>
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>

        <Header/>
        <ToDoForm />
        <ToDoList />
      </div>
    </ThemeProvider>
  );
};

export default App;

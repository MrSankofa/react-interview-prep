import {useState} from "react";

/* eslint-disable react/prop-types */

const TodoForm = ({addTodo}) => {

  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(userInput);
    setUserInput("");
  }

  return (
    <form action="#">
      <label htmlFor="addTodo"></label>
      <input type="text" name={'addTodo'} value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
      <button onClick={handleSubmit}>Add To Do</button>
    </form>
  )
}

export default TodoForm;

/* eslint-disable react/prop-types */

import {useState} from "react";

const TodoForm = ({addTodo}) => {

  const [input, setInput] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input.trim()) {
      return;
    }
    addTodo(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <span>Enter To Do: </span>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button> Add To Do</button>
    </form>
  )
}

export default TodoForm;

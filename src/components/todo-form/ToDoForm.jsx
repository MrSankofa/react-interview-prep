import {useState} from "react";
import PropTypes from "prop-types";


const ToDoForm = ({addTodo}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if( !input.trim()) return;

    addTodo(input);
    setInput('')
  }
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="todo">To Do</label>
      <input type="text" name="todo" id="todo-input" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type="submit">Add To Do</button>
    </form>
  )
}

ToDoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default ToDoForm;

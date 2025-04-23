import {useContext, useState} from "react";
import PropTypes from "prop-types";
import {ThemeContext} from "../../global/ThemeContext.jsx";
import {useDispatch} from "react-redux";
import {addTodo} from "../../features/todos/todosSlice.js";


const ToDoForm = () => {
  const [input, setInput] = useState('');
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if( !input.trim()) return;

    dispatch(addTodo(input));
    setInput('')
  }
  return (
    <form action="submit" onSubmit={handleSubmit} style={{ padding: '1rem', background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0' }}>
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

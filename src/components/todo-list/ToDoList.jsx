import PropTypes from "prop-types";
import {useContext} from "react";
import {ThemeContext} from "../../global/ThemeContext.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleCompleted} from "../../features/todos/todosSlice.js";


const ToDoList = () => {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h2 style={{ padding: '1rem', background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0' }}>Todo List</h2>
      <ul style={{ padding: '1rem', background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0' }}>
        {
          todos.map( todo => {
            return (
              <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}> {todo["text"]} <button onClick={() => dispatch(toggleCompleted(todo.id))}>{ todo.completed ? 'incomplete' : 'completed'}</button> <button onClick={ () => dispatch(deleteTodo(todo.id))}>delete</button></li>
            )
          })
        }
      </ul>

    </>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default  ToDoList;

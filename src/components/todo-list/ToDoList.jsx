import PropTypes from "prop-types";
import {useContext} from "react";
import {ThemeContext} from "../../global/ThemeContext.jsx";


const ToDoList = ({todos, toggleCompleted, deleteTodo}) => {

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <h2 style={{ padding: '1rem', background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0' }}>Todo List</h2>
      <ul style={{ padding: '1rem', background: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#333' : '#f0f0f0' }}>
        {
          todos.map( todo => {
            return (
              <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}> {todo["text"]} <button onClick={() => toggleCompleted(todo.id)}>{ todo.completed ? 'incomplete' : 'completed'}</button> <button onClick={ () => deleteTodo(todo.id)}>delete</button></li>
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

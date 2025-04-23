import PropTypes from "prop-types";


const ToDoList = ({todos, toggleCompleted}) => {


  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {
          todos.map( todo => {
            return (
              <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}> {todo["text"]} <button onClick={() => toggleCompleted(todo.id)}>{ todo.completed ? 'incomplete' : 'completed'}</button> <button>delete</button></li>
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
  toggleCompleted: PropTypes.func.isRequired
}

export default  ToDoList;

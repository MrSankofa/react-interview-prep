import PropTypes from "prop-types";


const ToDoList = ({todos}) => {


  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {
          todos.map( todo => {
            return (
              <li key={todo.id}> {todo["text"]}</li>
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
  ).isRequired
}

export default  ToDoList;

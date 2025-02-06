/* eslint-disable react/prop-types */

const TodoList = ({todos}) => {


  return (
    <ul>
      {
        todos.map( todo => {
          return <li key={todo.id}>
            {todo.todoText}
            <button>Completed</button>
          </li>
        })
      }

    </ul>
  )
}

export default  TodoList

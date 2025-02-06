/* eslint-disable react/prop-types */

const TodoList = ({todos, toggleTodo}) => {


  return (
    <ul>
      {
        todos.map( todo => {
          return <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
            {todo.todoText}
            <button onClick={() => toggleTodo(todo.id)}>{ todo.completed ? 'Undo' : 'Completed'}</button>
          </li>
        })
      }

    </ul>
  )
}

export default  TodoList

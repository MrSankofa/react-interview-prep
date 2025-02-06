/* eslint-disable react/prop-types */

const TodoList = ({todos, toggleTodo, deleteTodo}) => {

  return (
    <ul>
      {
        todos.map( todo => (
            <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
              {todo.todoText}
              <button onClick={() => toggleTodo(todo.id)}>{ !todo.completed ? 'Completed' : 'undo'}</button>
              <button onClick={() => deleteTodo(todo.id) }>Delete</button>
            </li>
          )
        )
      }
    </ul>
  );
}

export default TodoList;

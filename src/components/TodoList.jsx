

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
          <button onClick={() => toggleComplete(todo.id)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

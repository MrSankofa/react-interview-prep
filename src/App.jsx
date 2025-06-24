
/*
* create a header to display the Theme context
* create a TodoForm and TodoList complete to show CRUD functionality
* */

import {useState} from "react";

const App = () => {

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [editingTodoId, setEditingTodoId] = useState(null);

    const handleEdit = (targetTodo) => {
       setEditingTodoId(targetTodo.id);
        setInputValue(targetTodo.value)
    }

    const handleDelete = (targetTodo) => {
        setTodos(prevState => prevState.filter(todo => todo.id !== targetTodo.id));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputValue.trim()) return;

        if(editingTodoId)  {
            setTodos( prevState =>
                prevState.map(todo => {
                    if(todo.id === editingTodoId) {
                        return {
                            id: editingTodoId,
                            value: inputValue,
                            isComplete: todo.isComplete,
                        }
                    }
                    return todo;
                })
            )

        } else {
            const newTodo = {
                id: Date.now(),
                value: inputValue,
                isComplete: false
            }

            setTodos( prevState => [...prevState, newTodo])
        }

        setInputValue("")
        setEditingTodoId(null)

    }
  return (
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>


          <form action="#" onSubmit={handleSubmit}>
              <label htmlFor="todo-input">Enter To Do</label>
              <input id={"todo-input"} type="text" placeholder={"e.g. take out trash"}
                     value={inputValue}
                     onChange={ (e) => setInputValue(e.target.value)}/>
              <input type="submit" />
          </form>

          <h2>Todo List</h2>

          <ul>
              { todos.map( todo => {
                  return <li key={todo.id}>
                      {todo?.value}
                      <button onClick={() => handleEdit(todo)}>edit</button>
                      <button onClick={() => handleDelete(todo)}>delete</button>
                  </li>
              })}
          </ul>
      </div>
  );
};

export default App;

import { useState } from "react";


export const ToDoList = ({todos, addTodo, deleteToDo, toggleComplete}) => {
    const [input, setInput] = useState("");
    
    return (
        <> 
            <label htmlFor="addTodo">Add To Do</label>
            <input type="text" name="addTodo" id="addToDo" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={() => {
                    addTodo(input);
                    setInput("");
                }}
            >
                Add
            </button>

            <ul >
                
                {todos.map( ({todo, id, isCompleted}) => {
                    return (
                        <li key={id} style={{display: "flex"}}>
                            <span style={{ textDecoration: isCompleted ? "line-through" : "none"}}>
                                {todo}
                            </span>
                            <button onClick={() => toggleComplete({todo, id, isCompleted})}>Completed</button>
                            <button onClick={() => deleteToDo(id)}>Delete</button>
                        </li>
                    )
                })}

                
            </ul>


        </>
    );
}

export default ToDoList;

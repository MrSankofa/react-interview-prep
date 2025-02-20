import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../global/ThemeContext"
import { Header } from "./Header";
import ToDoList from "./ToDoList"

// missing up on the todo, where the store the state for child components, what the state should be.
// should I use map or foreach

export const ThemedApp = () => {
    const { theme } = useContext(ThemeContext);

    const [todos, setTodos] = useState([]);

    useEffect( () => {
        setTodos(prev => [ 
            {
                todo: "Take out the trash",
                id: "12838324",
                isCompleted: false,
            },
            {
                todo: "wash dishes",
                id: "14884329",
                isCompleted: false,
            },
        ])
    }, []);

    const addToDo = (todoText) => {
        console.log("Add todo");

        
        setTodos(prev => [...prev, {
            todo: todoText,
            id: Date.now(),
            isCompleted: false
        }]);
    }

    const deleteToDo = (targetTodoId) => {
        console.log("delete to do")

        setTodos(prev => prev.filter(todo => {
            return todo.id !== targetTodoId
        }));
    }

    const toggleComplete = (targetTodo) => {
        console.log("toggle completed to do")

        setTodos(prev => prev.map(todo => {
            if(todo.id === targetTodo.id) {
                todo.isCompleted = !targetTodo.isCompleted;
            }

            return todo;
        }));

    }

    return (
        <div
        contentEditable={true} // Makes entire page editable
        suppressContentEditableWarning={true} // Prevents React warning about controlled content
        style={{
            minHeight: "100vh",
            width: "100%",
            margin: 0,
            padding: 20,
            outline: "none", // Removes default focus outline
        }}
        >
            <Header />
            <div style={{ 
                margin: "0 auto",
                maxWidth: "600px",
                background: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white"
            }}>
                <h2>Todo List</h2>
                <ToDoList 
                    todos={todos}
                    addTodo={addToDo}
                    toggleComplete={toggleComplete}
                    deleteToDo={deleteToDo}
                />
            </div>
        </div>
    );
}
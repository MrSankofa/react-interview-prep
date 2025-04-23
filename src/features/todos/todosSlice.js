import {createSlice} from "@reduxjs/toolkit";

// redux slice: state + reducers + actions all in one place.

const initialTodos = [
  {id: 1, text: 'Learn React', completed: false},
  {id: 2, text: 'pass technical interview', completed: false},
];

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push({id: Date.now(), text: action.payload, completed: false});
    },
    toggleCompleted: (state, action) => {
      // todo: implement your way of doing this
      const todo = state.find( todo => todo.id === action.payload);
      if(todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, toggleCompleted, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos: [],
    filter: "all"
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                title: action.payload,
                completed: false,
            });
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },

        toggleTodo: (state, action) => {
            const todo = state.todos.find(
                (todo) => todo.id === action.payload
            );

            if(todo){
                todo.completed = !todo.completed;
            }
        },

        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const {
    addTodo,
    deleteTodo,
    toggleTodo,
    setFilter,
} = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;
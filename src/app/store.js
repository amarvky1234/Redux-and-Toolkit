import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import todoReducer from "../features/todos/todoSlice";
import ratingReducer from "../features/ratingapp/ratingSlice";

export const store = configureStore({
    reducer: {
        todolistR: todoReducer,
        ratingR: ratingReducer,
    },
});

setupListeners(store.dispatch)
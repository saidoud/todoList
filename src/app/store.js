import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import visibilityReducer from "../features/visibilityFilter/visibilitySlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    visibility: visibilityReducer,
  },
});

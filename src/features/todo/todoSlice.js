import { createSlice } from "@reduxjs/toolkit";

//Initial State (id , text ,completed)

const initialTodo = [];

//create Reducer

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodo,
  reducers: {
    addTodo: (state, action) => [...state, action.payload],
    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
    deleteTodoCompleted: (state) => state.filter((todo) => !todo.completed),
    updateCompleted: (state, action) =>
      state.map((todo) => {
        if (todo.id === action.payload)
          return { ...todo, completed: !todo.completed };
        else return todo;
      }),
    updateText: (state, action) =>
      state.map((todo) => {
        if (todo.id === action.payload.id)
          return { ...todo, text: action.payload.text };
        else return todo;
      }),
  },
});

//export reducers

export const {
  addTodo,
  deleteTodo,
  updateCompleted,
  updateText,
  deleteTodoCompleted,
} = todoSlice.actions;

//Selector State
export const selectTodo = (state) => state.todo;
export const selectCompleted = (state) => {
  const completed = state.todo.filter(
    (elements) => elements.completed === true
  );
  return completed;
};
export const selectActive = (state) => {
  const active = state.todo.filter((elements) => !elements.completed);
  return active;
};
export const itemleft = (state) => {
  const items = state.todo.filter((elements) => !elements.completed);
  return items.length;
};

export default todoSlice.reducer;

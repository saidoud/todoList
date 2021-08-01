import React from "react";
import TodoItem from "../TodoItem";
import { useSelector } from "react-redux";
import {
  selectTodo,
  selectCompleted,
  selectActive,
} from "../../features/todo/todoSlice";
import { getVisibility } from "../../features/visibilityFilter/visibilitySlice";

function TodoList() {
  //const todos = useSelector(selectTodo);
  const visibility = useSelector(getVisibility);
  let todo = [];
  //Visibility Filter (SHOW_ALL / SHOW_ACTIVE /SHOW_COMPLETED)
  const show_all = useSelector(selectTodo);
  const show_active = useSelector(selectActive);
  const show_completed = useSelector(selectCompleted);

  //Test Visibility
  if (visibility === "SHOW_ALL") todo = show_all;
  else if (visibility === "SHOW_ACTIVE") todo = show_active;
  else if (visibility === "SHOW_COMPLETED") todo = show_completed;
  return (
    <div>
      <ul className="todo-list">
        {todo.map((todo, index) => (
          <TodoItem
            key={index}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          ></TodoItem>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

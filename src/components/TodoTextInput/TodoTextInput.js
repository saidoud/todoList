import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

function TodoTextInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const hanleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      dispatch(addTodo({ id: Math.random(), text: text, completed: false }));
      setText("");
    }
  };
  return (
    <div>
      <input
        className="new-todo"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        autoFocus={true}
        onChange={hanleChange}
        onKeyPress={handleSubmit}
      />
    </div>
  );
}

export default TodoTextInput;

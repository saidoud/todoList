import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateCompleted } from "../../features/todo/todoSlice";
import classnames from "classnames";

function TodoItem(props) {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);

  const handleDoubleClick = (e) => {
    setEdit(true);
    //e.preventDefault();
  };
  const handleClick = () => {
    dispatch(deleteTodo(props.id));
  };

  const handleChange = (e) => {};

  const handleComletedChange = (e) => {
    dispatch(updateCompleted(props.id));
  };
  return (
    <li
      className={classnames({ completed: props.completed, editing: edit })}
      key={props.id}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          defaultChecked={props.completed}
          onChange={handleComletedChange}
        />
        <label onDoubleClick={handleDoubleClick}>{props.text}</label>
        <button onClick={handleClick} className="destroy"></button>
      </div>
      <input
        onChange={handleChange}
        className="edit"
        value={props.text}
      ></input>
    </li>
  );
}

export default TodoItem;

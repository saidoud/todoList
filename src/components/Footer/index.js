import React, { useState } from "react";
import classnames from "classnames";
import { itemleft, deleteTodoCompleted } from "../../features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { setvisibility } from "../../features/visibilityFilter/visibilitySlice";

function Footer() {
  const dispatch = useDispatch();
  const itemLeft = useSelector(itemleft);
  const [items, setItems] = useState([
    { name: "All", active: true },
    { name: "Active", active: false },
    { name: "Completed", active: false },
  ]);

  const handleClick = (index) => {
    setItems(
      items.map((elements, i) => {
        if (index === i || elements.active)
          return { ...elements, active: !elements.active };
        else return elements;
      })
    );
    if (index === 1) {
      dispatch(setvisibility("SHOW_ACTIVE"));
    } else if (index === 2) dispatch(setvisibility("SHOW_COMPLETED"));
    else dispatch(setvisibility("SHOW_ALL"));
  };

  return (
    <div>
      {/* Todo Count */}
      <span className="todo-count">
        <strong>{itemLeft}</strong>
        <span> </span>
        <span>items</span>
        <span> left</span>
      </span>

      {/* Todo Filter */}
      <ul className="filters">
        {items.map((elements, index) => (
          <li key={index}>
            <a
              onClick={() => handleClick(index)}
              style={{ cursor: "pointer" }}
              className={classnames({ selected: elements.active })}
            >
              {elements.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Clear Completed */}
      <button
        className="clear-completed"
        onClick={() => dispatch(deleteTodoCompleted())}
      >
        Clear completed
      </button>
    </div>
  );
}

export default Footer;

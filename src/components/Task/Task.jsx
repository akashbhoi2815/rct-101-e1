import React from "react";
import styles from "./task.module.css";

const Task = ({todo,onDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{todo.value}</div>
      {/* Counter here */}
      <button onClick={()=>onDelete(todo)} data-cy="task-remove-button">X</button>
    </li>
  );
};

export default Task;

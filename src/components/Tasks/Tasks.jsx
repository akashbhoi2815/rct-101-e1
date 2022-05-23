import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({todo,onDelete,tasksdata}) => {
  console.log(tasksdata);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        todo.value
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        <Task todo={todo.value} onDelete={onDelete} />

      </div>
    </>
  );
};

export default Tasks;

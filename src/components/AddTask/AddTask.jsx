import React, { useState } from "react";
import styles from "./addTask.module.css";


const AddTask = ({addTodo}) => {
  const [text,setText] = useState("")
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <button data-cy="add-task-button" onClick={()=>{
        
        addTodo={text}
        setText("")

      }}>+</button>
    </div>
  );
};

export default AddTask;

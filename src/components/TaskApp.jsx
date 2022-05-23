import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks"
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";

const TaskApp = (tasksdata) => {

  let [todos, SetTodos] = useState([]);

  const addTodo = (newtodo) =>{
    SetTodos([...todos,{value:newtodo}])
  }

  const onDelete =(value1)=>{
    SetTodos(todos.filter((todo)=> todo.value !== value1))
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      {/* Add Task */}
      <AddTask  addTodo={addTodo}/>
      {/* Tasks */}
      {todos.map((todo)=>(
        <Tasks key={todo.id} todo={todo} onDelete={onDelete} tasksdata={tasksdata} />
      ))

      }
      
    </div>
  );
};

export default TaskApp;

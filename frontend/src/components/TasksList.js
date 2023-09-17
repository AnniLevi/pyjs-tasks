import { useLoaderData, useNavigate, Outlet } from "react-router-dom";
import { Fragment } from "react";

import TaskItem from "./TaskItem";
import styles from "./TasksList.module.css";

function TasksList() {
  const tasks = useLoaderData();
  const navigate = useNavigate();

  const addNewTaskHandler = () => {
    navigate("new");
  };

  const hideModal = () => {
    navigate("..");
  };

  return (
    <Fragment>
      <div className={styles.tasks}>
        <h1>All Tasks</h1>
        <button onClick={addNewTaskHandler} className={styles["button-new"]}>
          New Task
        </button>
        <ul className={styles.list}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.item}>
              <TaskItem task={task} />
            </li>
          ))}
        </ul>
      </div>
      <Outlet context={hideModal} />
    </Fragment>
  );
}

export default TasksList;

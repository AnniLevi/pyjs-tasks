import { useNavigate } from "react-router-dom";

import TaskItem from "./TaskItem";
import styles from "./TasksList.module.css";

function TasksList({ tasks }) {
  const navigate = useNavigate();

  const addNewTaskHandler = () => {
    navigate("new");
  };

  return (
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
  );
}

export default TasksList;

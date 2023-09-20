import { useNavigate } from "react-router-dom";

import TaskItem from "./TaskItem";
import PageContent from "./PageContent";
import styles from "./TasksList.module.css";

function TasksList({ tasks }) {
  const navigate = useNavigate();

  const addNewTaskHandler = () => {
    navigate("new");
  };

  return (
    <PageContent>
      <h1>All Tasks</h1>
      <button onClick={addNewTaskHandler}>New Task</button>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.item}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </PageContent>
  );
}

export default TasksList;

import { Link } from "react-router-dom";

import styles from "./TaskItem.module.css";

function TaskItem({ task }) {
  return (
    <Link to={`/${task.id}`}>
      <h2>{task.title}</h2>
      <div className={styles.isDone}>
        <input
          type="checkbox"
          id={task.id}
          name={task.title}
          checked={task.is_done}
          disabled
        />
        <label htmlFor={task.title}>Done</label>
      </div>
    </Link>
  );
}

export default TaskItem;

import { Form, useActionData, useNavigation } from "react-router-dom";
import { Fragment } from "react";

import styles from "./TaskForm.module.css";

function TaskForm({ method, task, onClose, title, onDelete }) {
  const data = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <Fragment>
      <h1>{title}</h1>
      <Form method={method} className={styles.form}>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            defaultValue={task ? task.title : ""}
          />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            defaultValue={task ? task.description : ""}
          />
        </p>
        <p className={styles.isDone}>
          <label htmlFor="isDone">Done</label>
          <input
            id="isDone"
            type="checkbox"
            name="isDone"
            defaultChecked={task ? task.is_done : false}
            defaultValue={task ? task.is_done : false}
          />
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </button>
          {onDelete && (
            <button
              id={styles.deleteButton}
              type="button"
              onClick={onDelete}
              disabled={isSubmitting}
            >
              Delete
            </button>
          )}
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Save"}
          </button>
        </div>
      </Form>
    </Fragment>
  );
}

export default TaskForm;

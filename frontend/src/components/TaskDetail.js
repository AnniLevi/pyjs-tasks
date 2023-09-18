import {
  Await,
  useLoaderData,
  useOutletContext,
  useSubmit,
} from "react-router-dom";
import { Suspense } from "react";

import Modal from "./Modal";
import TaskForm from "./TaskForm";
import LoadingSpinner from "./LoadingSpinner";

function TaskDetail() {
  const { task } = useLoaderData();
  const hideModal = useOutletContext();
  const submit = useSubmit();

  const deleteTaskHandler = () => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, {
        method: "DELETE",
      });
    }
  };

  return (
    <Modal onClick={hideModal}>
      <Suspense fallback={<LoadingSpinner />}>
        <Await resolve={task}>
          {(loadedTask) => (
            <TaskForm
              task={loadedTask}
              method="PATCH"
              onClose={hideModal}
              title="Edit Task"
              onDelete={deleteTaskHandler}
            />
          )}
        </Await>
      </Suspense>
    </Modal>
  );
}

export default TaskDetail;

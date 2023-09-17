import {
  useOutletContext,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";

import Modal from "./Modal";
import TaskForm from "./TaskForm";

function TaskDetail() {
  const task = useRouteLoaderData("task-detail");
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
      <TaskForm
        task={task}
        method="PATCH"
        onClose={hideModal}
        title="Edit Task"
        onDelete={deleteTaskHandler}
      />
    </Modal>
  );
}

export default TaskDetail;

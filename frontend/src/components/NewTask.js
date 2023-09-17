import { useOutletContext } from "react-router-dom";

import Modal from "./Modal";
import TaskForm from "./TaskForm";

function NewTask() {
  const hideModal = useOutletContext();

  return (
    <Modal onClick={hideModal}>
      <TaskForm method="POST" onClose={hideModal} title="Create New Task" />
    </Modal>
  );
}

export default NewTask;

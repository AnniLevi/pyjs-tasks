import {
  Await,
  Outlet,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { Fragment, Suspense } from "react";

import LoadingSpinner from "./LoadingSpinner";
import TasksList from "./TasksList";

function TasksLayout() {
  const { tasks } = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const hideModal = () => {
    navigate("..");
  };

  let content = (
    <Suspense fallback={<LoadingSpinner />}>
      <Await resolve={tasks}>
        {(loadedTasks) => (
          <Fragment>
            <TasksList tasks={loadedTasks} />
            <Outlet context={hideModal} />
          </Fragment>
        )}
      </Await>
    </Suspense>
  );

  if (navigation.state !== "idle") {
    content = <LoadingSpinner />;
  }

  return <Fragment>{content}</Fragment>;
}

export default TasksLayout;

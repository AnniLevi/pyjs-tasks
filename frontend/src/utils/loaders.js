import { defer } from "react-router-dom";

import { sendRequest } from "./api";

export async function tasksLoader() {
  return defer({ tasks: sendRequest({ path: "/tasks" }) });
}

export async function taskDetailLoader({ request, params }) {
  const id = params.taskId;
  return defer({
    task: sendRequest({
      path: `/tasks/${id}`,
      method: "GET",
    }),
  });
}

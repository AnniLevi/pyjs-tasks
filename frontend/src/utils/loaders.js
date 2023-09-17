import { sendRequest } from "./api";

export async function tasksLoader() {
  return await sendRequest({ path: "/tasks" });
}

export async function taskDetailLoader({ request, params }) {
  const id = params.taskId;
  return await sendRequest({
    path: `/tasks/${id}`,
    method: "GET",
  });
}

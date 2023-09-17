import { redirect } from "react-router-dom";

import { sendRequest } from "./api";

export async function manipulateTaskAction({ request, params }) {
  const method = request.method;
  let path = "/tasks";

  const data = await request.formData();
  const isDone = !!data.get("isDone");

  const taskData = {
    title: data.get("title"),
    description: data.get("description"),
    is_done: isDone,
  };

  if (method !== "POST") {
    const taskId = params.taskId;
    path += "/" + taskId;
  }

  await sendRequest({
    path: path,
    method: method,
    body: taskData,
  });
  return redirect("/");
}

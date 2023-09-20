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

export async function submitLocationAction({ request }) {
  const data = Object.fromEntries(await request.formData());

  const country = data.country ? JSON.parse(data.country) : null;
  const state = data.state ? JSON.parse(data.state) : null;
  const city = data.city ? JSON.parse(data.city) : null;

  const requestBody = city || state || country;

  return await sendRequest({
    path: "/weather",
    method: request.method,
    body: requestBody,
  });
}

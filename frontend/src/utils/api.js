import { json } from "react-router-dom";

export async function sendRequest(requestConfig) {
  const apiUrl = process.env.REACT_APP_API_URL;

  const response = await fetch(`${apiUrl}${requestConfig.path}/`, {
    method: requestConfig.method ? requestConfig.method : "GET",
    headers: requestConfig.headers
      ? requestConfig.headers
      : { "Content-Type": "application/json" },
    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not fetch data" },
      { status: response.status },
    );
  } else {
    return await response.json();
  }
}

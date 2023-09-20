import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import Error from "./components/Error";
import TaskDetail from "./components/TaskDetail";
import NewTask from "./components/NewTask";
import { manipulateTaskAction, submitLocationAction } from "./utils/actions";
import { tasksLoader, taskDetailLoader } from "./utils/loaders";
import TasksLayout from "./components/TasksLayout";
import WeatherLayout from "./components/WeatherLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        id: "tasks",
        element: <TasksLayout />,
        loader: tasksLoader,
        children: [
          {
            path: ":taskId",
            id: "task-detail",
            element: <TaskDetail />,
            loader: taskDetailLoader,
            action: manipulateTaskAction,
          },
          {
            path: "new",
            element: <NewTask />,
            action: manipulateTaskAction,
          },
        ],
      },
      {
        path: "weather",
        element: <WeatherLayout />,
        action: submitLocationAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

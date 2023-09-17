import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import TasksList from "./components/TasksList";
import Error from "./components/Error";
import WeatherInfo from "./components/WeatherInfo";
import TaskDetail from "./components/TaskDetail";
import NewTask from "./components/NewTask";
import { manipulateTaskAction } from "./utils/actions";
import { tasksLoader, taskDetailLoader } from "./utils/loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <TasksList />,
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
        element: <WeatherInfo />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

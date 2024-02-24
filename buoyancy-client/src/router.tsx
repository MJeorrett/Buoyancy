import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./pages/Error";
import ProjectsPage from "./pages/Projects";
import PeoplePage from "./pages/People";

export const paths = {
  home: "/",
  projects: "/projects",
  people: "/people",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/people",
        element: <PeoplePage />,
      }
    ],
  },
]);

export default router;

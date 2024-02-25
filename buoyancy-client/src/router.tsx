import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./pages/Error";
import ProjectsPage from "./pages/Projects";
import PeoplePage from "./pages/People";
import RolesPage from "./pages/Roles";

export const paths = {
  home: "/",
  projects: "/projects",
  people: "/people",
  roles: "/roles",
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
      },
      {
        path: "/roles",
        element: <RolesPage />,
      }
    ],
  },
]);

export default router;

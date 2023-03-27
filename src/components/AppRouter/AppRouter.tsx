import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Character } from "../../pages/Character";
import { Home } from "../../pages/Home";
import { NotFound } from "../../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/character/:id",
    element: <Character />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export { AppRouter };

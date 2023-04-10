import { ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { client } from "../../apollo";
import { Character } from "../../pages/Character";
import { Home } from "../../pages/Home";
import { NotFound } from "../../pages/NotFound";
import Epidsodes from "../../pages/Epidsodes";
import Locations from "../../pages/Locations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/episodes",
    element: <Epidsodes />,
  },
  {
    path: "/locations",
    element: <Locations />,
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
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};

export { AppRouter };

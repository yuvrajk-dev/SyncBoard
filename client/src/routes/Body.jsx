import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "./Home";
import CanvasContainer from "../pages/CanvasContainer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
      children: [
        {
          index: true,
          element: <CanvasContainer />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;

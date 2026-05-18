import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "./Home";
import CanvasContainer from "../pages/CanvasContainer";
import CanvasIndex from "../Components/CanvasIndex";

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
          element: <CanvasIndex />,
        },
        {
          path: "canvas",
          element: <CanvasContainer />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;

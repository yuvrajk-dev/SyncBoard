import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "./Home";
import CanvasContainer from "../pages/CanvasContainer";
import CanvasIndex from "../Components/CanvasIndex";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { updateStore } from "../utils/updateStore";
import { useDispatch } from "react-redux";

const Body = () => {
  const userDispatch = useDispatch();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const restoreUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        await updateStore({ user: session.user }, userDispatch);
      }

      setCheckingAuth(false);
    };

    restoreUser();
  }, [userDispatch]);

  if (checkingAuth) {
    return <div>Loading...</div>;
  }
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

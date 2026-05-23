import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/auth/Login";
import Home from "./Home";
import CanvasContainer from "../pages/CanvasContainer";
import CanvasIndex from "../Components/CanvasIndex";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { updateStore } from "../utils/updateStore";
import { useDispatch } from "react-redux";
import Profile from "../Components/Profile";

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

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: checkingAuth ? (
        <div className="min-h-screen flex items-center justify-center bg-(--bg)">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-white/20 border-t-blue-500 rounded-full animate-spin"></div>

            <p className="text-(--text-muted) font-semibold tracking-wide">
              Loading Workspace...
            </p>
          </div>
        </div>
      ) : (
        <Home />
      ),
      children: [
        {
          index: true,
          element: <CanvasIndex />,
        },
        {
          path: "canvas",
          element: <CanvasContainer />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;

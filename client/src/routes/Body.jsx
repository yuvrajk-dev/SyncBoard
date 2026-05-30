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
import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoutes";

const Body = () => {
  const userDispatch = useDispatch();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const restoreUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      await updateStore(session ? session.user : null, userDispatch);

      setCheckingAuth(false);
    };

    restoreUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      await updateStore(session ? session.user : null, userDispatch);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [userDispatch]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: "/home",
      element: (
        <ProtectedRoute checkingAuth={checkingAuth}>
          <Home />
        </ProtectedRoute>
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

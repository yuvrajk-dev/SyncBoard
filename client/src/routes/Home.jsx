import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col gap-1 bg-(--bg-dark) w-screen h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

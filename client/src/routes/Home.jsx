import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col gap-1 bg-(--bg-dark)  min-h-screen ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

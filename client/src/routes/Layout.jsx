import Navbar from "../Components/Navbar";
import Main from "../pages/Main";

const Layout = () => {
  return (
    <div className="flex flex-col gap-1 bg-(--bg-dark) w-screen h-screen">
      <Navbar />
      <Main />
    </div>
  );
};

export default Layout;

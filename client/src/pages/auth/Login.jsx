import React from "react";
import Footer from "../../Components/Footer";

const Login = () => {
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center ">
        <div className="bg-(--bg) w-80 py-10 p-3 gap-3 shadow-(--shadow-m) flex justify-center flex-col rounded-2xl">
          <h1 className=" font-semibold text-center">Welcome Back</h1>
          <input
            type="text"
            placeholder="Email"
            className=" outline-none bg-(--bg-light) py-2 px-3"
          />
          <input
            type="text"
            placeholder="Password"
            className=" outline-none bg-(--bg-light) py-2 px-3"
          />
          <button className=" py-2 shadow-(--shadow-s) font-semibold bg-(--bg-light) hover:shadow-(--shadow-m)">
            Login
          </button>
          <p className="text-sm text-center text-(--text-muted)">
            Don't have an account?
            <span className="text-blue-400 cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

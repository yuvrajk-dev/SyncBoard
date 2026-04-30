import React, { useState } from "react";
import Footer from "../../Components/Footer";

const Login = () => {
  const [signin, setSignin] = useState(true);
  const [avatarID, setAvatarID] = useState(null);
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center ">
        <div className="bg-(--bg) w-80 py-10 p-3 gap-3 shadow-(--shadow-m) flex justify-center flex-col rounded-2xl">
          <h1 className=" font-semibold text-center text-4xl  mb-6">
            {signin ? "Sign In" : "Sign Up"}
          </h1>

          {!signin && (
            <input
              type="text"
              placeholder="User Name"
              className=" outline-none bg-(--bg-light) py-2 px-3 rounded-lg"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className=" outline-none bg-(--bg-light) py-2 px-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Password"
            className=" outline-none bg-(--bg-light) py-2 px-3 rounded-lg"
          />

          {!signin && (
            <input
              type="text"
              placeholder="Confirm Password"
              className=" outline-none bg-(--bg-light) py-2 px-3 rounded-lg"
            />
          )}

          {!signin && (
            <div className="bg-(--bg-light) py-3 px-3 rounded-lg flex flex-col gap-2">
              {/* Label */}
              <span className="text-xs ">Select Avatar</span>

              {/* Avatars */}
              <div className="flex justify-between items-center">
                {[
                  "bg-red-500",
                  "bg-blue-500",
                  "bg-green-500",
                  "bg-yellow-500",
                ].map((color, i) => (
                  <div
                    key={i}
                    onClick={() => setAvatarID(i)}
                    className={`w-10 h-10 rounded-full cursor-pointer transition
          ${color}
          ${
            avatarID === i
              ? "ring-2 ring-blue-400 scale-110"
              : "hover:scale-105"
          }`}
                  ></div>
                ))}
              </div>
            </div>
          )}
          <button className=" rounded-lg py-2 shadow-(--shadow-s) font-semibold bg-(--bg-light) hover:shadow-(--shadow-m)">
            {signin ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-sm text-center text-(--text-muted)">
            {signin ? " Don't have an account? " : "Already have an account?"}
            <span
              onClick={() => {
                setSignin(!signin);
              }}
              className="text-blue-400 cursor-pointer hover:underline"
            >
              {signin ? " Register" : " Login"}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

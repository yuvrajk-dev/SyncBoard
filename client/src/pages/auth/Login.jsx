import React, { useState } from "react";
import Footer from "../../Components/Footer";

const Login = () => {
  const [signin, setSignin] = useState(true);
  const [avatarID, setAvatarID] = useState(null);

  const avatar = [
    { color: "bg-red-500", link: "/avatarM01.png", id: "001" },
    { color: "bg-blue-500", link: "/avatarM02.png", id: "002" },
    { color: "bg-green-500", link: "/avatarF03.png", id: "003" },
    { color: "bg-yellow-500", link: "/avatarF04.png", id: "004" },
  ];
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
              <span className="text-xs  text-(--text-muted)/80">
                Select Avatar
              </span>

              {/* Avatars */}
              <div className="flex  justify-between items-center">
                {avatar.map((avatar) => (
                  <div
                    key={avatar.id}
                    onClick={() => setAvatarID(avatar.id)}
                    className={`w-10 h-10 rounded-full cursor-pointer transition 
          ${avatar.color}
          ${avatarID === avatar.id ? " scale-110" : "hover:scale-105"}`}
                  >
                    <img
                      src={avatar.link}
                      alt="Avatar"
                      className="w-full  h-full rounded-full cursor-pointer "
                    />
                  </div>
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

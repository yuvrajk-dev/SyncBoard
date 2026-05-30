import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const avatarMap = {
    "001": "/avatarM01.png",
    "002": "/avatarM02.png",
    "003": "/avatarF03.png",
    "004": "/avatarF04.png",
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = !isDarkMode;

    setIsDarkMode(newTheme);

    document.body.classList.toggle("dark", newTheme);
    document.body.classList.toggle("light", !newTheme);

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const user = useSelector((data) => data.user);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    } else {
      console.log("Logged out");
    }
  };

  return (
    <div className="flex h-20 w-full items-center justify-between border-b border-white/10 bg-(--bg) pr-5 pl-10 ">
      <div className="flex">SyncBoard</div>

      <div className="flex items-center  gap-3">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsUserMenuOpen((isOpen) => !isOpen)}
            className="flex cursor-pointer    items-center py-1 px-3 gap-2 rounded-full bg-(--bg-light)  text-sm font-semibold capitalize text-(--text) shadow-(--shadow-s) hover:shadow-(--shadow-m)"
          >
            <img
              src={avatarMap[user?.avatar]}
              alt="Avatar"
              className="  w-7  rounded-full  "
            />
            {user?.username}
            <svg
              aria-hidden="true"
              className={`h-4 w-4 transition-transform ${isUserMenuOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </button>

          {isUserMenuOpen && (
            <ul className="absolute right-0 top-12 z-20 w-40 overflow-hidden rounded-xl border border-white/10 bg-(--bg-light) py-2 text-sm font-semibold text-(--text) shadow-(--shadow-m)">
              <li>
                <button
                  onClick={() => {
                    navigate("/home");

                    setIsUserMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:text- "
                >
                  Home
                </button>
              </li>{" "}
              <li>
                <button
                  onClick={() => {
                    navigate("/home/profile");

                    setIsUserMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:text- "
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full  px-4 py-2 text-left  "
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-(--bg-light) text-(--text) shadow-(--shadow-s) hover:shadow-(--shadow-m)"
        >
          {isDarkMode ? (
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.05 16.95l-1.41 1.41m12.72 0-1.42-1.41M7.05 7.05 5.64 5.64M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

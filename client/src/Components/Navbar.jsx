import React, { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const avatarMap = {
    "001": "/avatarM01.png",
    "002": "/avatarM02.png",
    "003": "/avatarF03.png",
    "004": "/avatarF04.png",
  };

  const user = useSelector((data) => data.user);

  return (
    <div className="flex h-20 w-full items-center justify-between border-b border-white/10 bg-(--bg) pr-5 pl-10 ">
      <div className="flex">SyncBoard</div>

      <div className="flex items-center  gap-3">
        <p className="rounded-wxl capitalize bg-(--bg-light) px-5 py-2 text-sm font-semibold text-(--text) shadow-(--shadow-s)">
          {user.username}
        </p>

        <button
          type="button"
          onClick={() => setIsDarkMode((currentMode) => !currentMode)}
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

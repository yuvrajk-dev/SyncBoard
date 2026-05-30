import { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import { validation } from "../../utils/validate";
import { supabase } from "../../utils/supabase";
import { updateStore } from "../../utils/updateStore";
import { useDispatch } from "react-redux";

const Login = () => {
  const userDispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [isSignin, setIsSignin] = useState(() => {
    const value = sessionStorage.getItem("signin");
    return value === null ? true : value === "true";
  });

  const [username, setUsername] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatarID, setAvatarID] = useState(null);
  const [errors, setErrors] = useState({});

  const toggleTheme = () => {
    const newTheme = !isDarkMode;

    setIsDarkMode(newTheme);

    document.body.classList.toggle("dark", newTheme);
    document.body.classList.toggle("light", !newTheme);

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    sessionStorage.setItem("signin", isSignin);

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isSignin]);

  const showValidation = password && confirmPassword;
  const isMismatch = showValidation && password !== confirmPassword;

  const avatar = [
    { link: "/avatarM01.png", id: "001" },
    { link: "/avatarM02.png", id: "002" },
    { link: "/avatarF03.png", id: "003" },
    { link: "/avatarF04.png", id: "004" },
  ];

  return (
    <>
      <div className="  w-full min-h-screen py-5 flex justify-center items-center ">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            setLoading(true);

            try {
              const validationErrors = validation(
                username,
                email,
                password,
                avatarID,
                isSignin,
              );

              setErrors(validationErrors);

              if (Object.keys(validationErrors).length > 0) {
                return;
              }

              if (isSignin) {
                const { data, error } = await supabase.auth.signInWithPassword({
                  email,
                  password,
                });

                if (error) {
                  setErrors({ auth: error.message });
                  return;
                }
                const result = await updateStore(data, userDispatch);
                if (result?.error) {
                  setErrors({ auth: result.error });
                  return;
                }
              }

              if (!isSignin) {
                const { data, error } = await supabase.auth.signUp({
                  email,
                  password,
                });

                if (error) {
                  setErrors({ auth: error.message });
                  return;
                }

                const { error: profileError } = await supabase
                  .from("profiles")
                  .insert({
                    id: data.user.id,
                    username,
                    avatar: avatarID,
                  });

                if (profileError) {
                  setErrors({ auth: profileError.message });
                  return;
                }
                const result = await updateStore(data, userDispatch);
                if (result?.error) {
                  setErrors({ auth: result.error });
                  return;
                }
              }
            } finally {
              setLoading(false);
            }
          }}
          className=" bg-(--bg) w-80 py-10 p-3 gap-3 shadow-(--shadow-m) flex justify-center flex-col rounded-2xl"
        >
          <h1 className=" font-semibold text-center text-4xl  mb-6">
            {isSignin ? "Sign In" : "Sign Up"}
          </h1>
          {/* username */}

          {!isSignin && (
            <div>
              <input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="User Name"
                className="w-full outline-none placeholder:text-(--text-muted)/80  bg-(--bg-light) py-2 px-3 rounded-lg"
              />
              {errors.username && (
                <p className="text-red-500 mt-1 ml-1 text-xs">
                  {errors.username}
                </p>
              )}
            </div>
          )}

          {/* email  */}

          <div>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="Email"
              className=" outline-none placeholder:text-(--text-muted)/80 w-full bg-(--bg-light) py-2 px-3 rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 mt-1 ml-1 text-xs">{errors.email}</p>
            )}
          </div>
          {/* password */}
          <div>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              className=" outline-none w-full placeholder:text-(--text-muted)/80 bg-(--bg-light) py-2 px-3 rounded-lg"
            />
            {errors.password && (
              <p className="text-red-500 mt-1 ml-1 text-xs">
                {errors.password}
              </p>
            )}
          </div>

          {/* confirmPassword */}

          {!isSignin && (
            <div>
              <input
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                placeholder="Confirm Password"
                className={`${isMismatch ? "outline-1" : "outline-none"} w-full outline-red-500 placeholder:text-(--text-muted)/80 bg-(--bg-light) py-2 px-3 rounded-lg`}
              />
              {isMismatch && (
                <p className="text-red-500 mt-1 ml-1 text-xs">
                  Password is not matching
                </p>
              )}
            </div>
          )}

          {/* avatar */}

          {!isSignin && (
            <div>
              <div className="bg-(--bg-light) py-3 px-3 rounded-lg flex flex-col gap-2">
                {/* Label */}
                <span className="  text-xs  text-(--text-muted)/80 ">
                  Select Avatar
                </span>

                {/* Avatars */}
                <div className="flex  justify-between items-center">
                  {avatar.map((avatar) => (
                    <div
                      key={avatar.id}
                      onClick={() => setAvatarID(avatar.id)}
                      className={`w-10 h-10 rounded-full cursor-pointer transition

          ${avatarID === avatar.id ? "  shadow-(--shadow-l) scale-115 translate-y-1" : "translate-y-0.5 shadow-(--shadow-s)  hover:scale-105"}`}
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

              {errors.avatar && (
                <p className="text-red-500 ml-1 mt-1 text-xs">
                  {errors.avatar}
                </p>
              )}
            </div>
          )}

          <p className="text-red-500 ml-1 text-xs">{errors.auth}</p>

          <button
            disabled={loading}
            className=" rounded-lg py-2 shadow-(--shadow-s) font-semibold bg-(--bg-light) hover:shadow-(--shadow-m)"
          >
            {loading ? "Please wait..." : isSignin ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-sm text-center text-(--text-muted)">
            {isSignin ? " Don't have an account? " : "Already have an account?"}
            <span
              onClick={() => {
                setIsSignin((prev) => !prev);
                setErrors({});
                setUsername("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setAvatarID(null);
                setLoading(false);
              }}
              className="text-blue-400 cursor-pointer hover:underline"
            >
              {isSignin ? " Register" : " Login"}
            </span>
          </p>
        </form>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          className="flex absolute top-5 right-5 h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-(--bg-light) text-(--text) shadow-(--shadow-s) hover:shadow-(--shadow-m)"
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
      <Footer />
    </>
  );
};

export default Login;

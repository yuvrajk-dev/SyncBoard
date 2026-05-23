import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { supabase } from "../utils/supabase";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((data) => data.user);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const avatarMap = [
    { id: "001", link: "/avatarM01.png" },
    { id: "002", link: "/avatarM02.png" },
    { id: "003", link: "/avatarF03.png" },
    { id: "004", link: "/avatarF04.png" },
  ];

  const [username, setUsername] = useState(user?.username || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [loading, setLoading] = useState(false);
  const cleanUsername = username.trim();

  const handleSave = async () => {
    setError("");

    if (!username.trim()) {
      setError("Username cannot be empty");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase
        .from("profiles")
        .update({
          username: cleanUsername,
          avatar,
        })
        .eq("id", user.id);

      if (error) {
        setError(error.message);
        return;
      }

      dispatch(
        addUser({
          ...user,
          username: cleanUsername,
          avatar,
        }),
      );

      navigate(-1);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-(--bg-light) flex flex-1 rounded-xl justify-center items-center">
      <div className="w-96  bg-(--bg-light) rounded-2xl p-6 shadow-(--shadow-m)">
        <h1 className="text-3xl font-bold mb-6 text-(--text)">Edit Profile</h1>

        {/* Avatar */}
        <div className="flex justify-center mb-6 ">
          <img
            src={avatarMap.find((a) => a.id === avatar)?.link}
            alt="avatar"
            className="w-24 h-24 rounded-full border"
          />
        </div>

        {/* Avatar Selection */}
        <div className="flex justify-between mb-6">
          {avatarMap.map((item) => (
            <div
              key={item.id}
              onClick={() => !loading && setAvatar(item.id)}
              className={`w-14 h-14 rounded-full cursor-pointer transition ${
                avatar === item.id
                  ? "scale-110 shadow-(--shadow-l)"
                  : "hover:scale-105"
              }`}
            >
              <img
                src={item.link}
                alt="avatar"
                className="w-full h-full rounded-full"
              />
            </div>
          ))}
        </div>

        {/* Username */}
        <div className="mb-6">
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            type="text"
            placeholder="Username"
            className="w-full bg-(--bg) text-(--text) py-3 px-4 rounded-xl outline-none"
          />
          {error && <p className="text-red-500 text-sm mt-2 ml-1">{error}</p>}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            disabled={loading}
            className="flex-1 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 text-white font-semibold"
          >
            {loading ? "Saving..." : "Save"}
          </button>

          <button
            disabled={loading}
            onClick={() => navigate(-1)}
            className="flex-1 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed bg-red-500 text-white font-semibold"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { addUser } from "./userSlice";
import { supabase } from "./supabase";

const updateStore = async (data, userDispatch) => {
  const { data: profileData, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  if (error) {
    return { error: error.message };
  }
  const finalUser = {
    id: data.user.id,
    email: data.user.email,
    username: profileData.username,
    avatar: profileData.avatar,
  };

  userDispatch(addUser(finalUser));
};
export { updateStore };

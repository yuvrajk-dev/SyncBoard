import { addUser } from "./userSlice";
import { supabase } from "./supabase";

const updateStore = async (data, userDispatch) => {
  const { data: profileData, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  if (error) {
    console.log(error.message);
    return;
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

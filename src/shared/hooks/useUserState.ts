import { create } from "zustand";

export const useUserState = create<User.userStore>((set) => ({
  //State
  isSignIn: true,
  name: "",

  //Set function
  setName: (name) => {
    set(() => ({ isSignIn: true, name: name }));
  },
}));

import { create } from "zustand";

export const useUserState = create<User.userStore>((set) => ({
  //State
  isSignIn: true,
  nickname: "",

  //Set function
  setName: (nickname) => {
    set(() => ({ isSignIn: true, nickname: nickname }));
  },
}));

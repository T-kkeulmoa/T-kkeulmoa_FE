import { create } from "zustand";

export const useUserState = create<User.userStore>((set) => ({
  //State
  isSignIn: true,
  nickname: "",
  point: 0,

  //Set function
  setSignIn: (res) => {
    set(() => ({ isSignIn: true, nickname: res.nickname, point: res.point }));
  },
}));

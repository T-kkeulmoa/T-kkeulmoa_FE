import { create } from "zustand";

export const useUserState = create<User.userStore>((set) => ({
  //State
  isSignIn: true,
  nickname: "",
  point: 0,
  rewardLevel: 0,
  memberRecycleRecordResponseDto: {
    memberId: 0,
    recycleCountSum: 1,
    normalRecycleCount: 1,
    plasticRecycleCount: 1,
    canGlassRecycleCount: 1,
    paperRecycleCount: 1,
    otherRecycleCount: 1,
  },

  //Set function
  setSignIn: (res) => {
    set(() => ({ isSignIn: true, nickname: res.nickname, point: res.point }));
  },

  setPoint: (point, rewardLevel, memberRecycleRecordResponseDto) => {
    set(() => ({
      point: point,
      rewardLevel: rewardLevel,
      memberRecycleRecordResponseDto: memberRecycleRecordResponseDto,
    }));
  },
}));

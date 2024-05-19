declare namespace User {
  //Basic
  export interface User {}

  export interface MemberRecycleRecordResponseDto {
    memberId: number;
    recycleCountSum: number;
    normalRecycleCount: number;
    plasticRecycleCount: number;
    canGlassRecycleCount: number;
    paperRecycleCount: number;
    otherRecycleCount: number;
  }
  //Store
  export interface userStore {
    isSignIn: boolean;
    nickname: string;
    point: number;
    rewardLevel: number;
    rewardLevel: 0;
    memberRecycleRecordResponseDto: MemberRecycleRecordResponseDto;
    setSignIn: (res: SignInResDto) => void;
    setPoint: (
      setPoint: string,
      point: number,
      rewardLevel: number,
      memberRecycleRecordResponseDto: memberRecycleRecordResponseDto
    ) => void;
  }

  //DTO
  export interface SignInReqDto {
    id: string;
    password: string;
  }

  export interface SignInResDto {
    id: string;
    nickname: string;
    point: number;
  }

  export interface FindUserResDto {
    nickname: string;
    point: number;
    rewardLevel: number;
    memberRecycleRecordResponseDto: MemberRecycleRecordResponseDto;
  }

  //Form type
}

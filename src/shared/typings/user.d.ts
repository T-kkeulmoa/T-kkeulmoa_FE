declare namespace User {
  //Basic
  export interface User {}

  //DTO
  export interface SignInReqDto {
    id: string;
    password: string;
  }

  export interface SignInResDto {
    id: string;
    nickname: string;
  }

  //Form type

  //Store
  //Store
  export interface userStore {
    isSignIn: boolean;
    nickname: string;
    setName: (nickname: string) => void;
  }
}

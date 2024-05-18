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
    name: string;
  }

  //Form type

  //Store
  //Store
  export interface userStore {
    isSignIn: boolean;
    name: string;
    setName: (name: string) => void;
  }
}

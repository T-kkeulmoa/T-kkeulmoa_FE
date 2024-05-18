import { AxiosResponse } from "axios";

import { API, setAccess, useUserState } from "@/shared";

export const AuthService = () => {
  const URL = "api/v1/user";
  const setSignIn = useUserState((state) => state.setSignIn);

  const signin = async (body: User.SignInReqDto) => {
    const {
      data: { id, nickname, point },
    } = (await API.post(
      `${URL}/sign-in`,
      body
    )) as AxiosResponse<User.SignInResDto>;

    setAccess(id);
    setSignIn({ id, nickname, point });
  };

  return { signin };
};

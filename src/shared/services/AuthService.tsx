import { AxiosResponse } from "axios";

import { API, setAccess, useUserState } from "@/shared";

export const AuthService = () => {
  const URL = "api/v1/user";
  const setName = useUserState((state) => state.setName);

  const signin = async (body: User.SignInReqDto) => {
    const {
      data: { id, name },
    } = (await API.post(
      `${URL}/sign-in`,
      body
    )) as AxiosResponse<User.SignInResDto>;

    setAccess(id);
    setName(name);
  };

  return { signin };
};

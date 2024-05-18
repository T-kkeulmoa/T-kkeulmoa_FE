import { AxiosResponse } from "axios";

import { API, setAccess, useUserState } from "@/shared";

export const AuthService = () => {
  const URL = "api/v1/member";
  const setSignIn = useUserState((state) => state.setSignIn);
  const setPoint = useUserState((state) => state.setPoint);

  const signin = async (body: User.SignInReqDto) => {
    const {
      data: { id, nickname, point },
    } = (await API.post(
      `${URL}/signin`,
      body
    )) as AxiosResponse<User.SignInResDto>;

    setAccess(id);
    setSignIn({ id, nickname, point });
  };

  const findUser = async () => {
    const {
      data: { point, rewardLevel, memberRecycleRecordResponseDto },
    } = (await API.get(`${URL}/find`)) as AxiosResponse<User.FindUserResDto>;

    setPoint(point, rewardLevel, memberRecycleRecordResponseDto);
  };

  return { signin, findUser };
};

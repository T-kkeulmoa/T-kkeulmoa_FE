import { AxiosResponse } from "axios";
import { useNavigate } from "react-router";

import { API, setAccess, useUserState, PAGE_URL } from "@/shared";

export const AuthService = () => {
  const URL = "api/v1/member";
  const setSignIn = useUserState((state) => state.setSignIn);
  const setPoint = useUserState((state) => state.setPoint);
  const navigate = useNavigate();

  const signin = async (body: User.SignInReqDto) => {
    const {
      data: { id, nickname, point },
    } = (await API.post(
      `${URL}/signin`,
      body
    )) as AxiosResponse<User.SignInResDto>;

    setAccess(id);
    setSignIn({ id, nickname, point });

    navigate(PAGE_URL.Home);
  };

  const findUser = async () => {
    const {
      data: { nickname, point, rewardLevel, memberRecycleRecordResponseDto },
    } = (await API.get(`${URL}/find`)) as AxiosResponse<User.FindUserResDto>;

    setPoint(nickname, point, rewardLevel, memberRecycleRecordResponseDto);
  };

  return { signin, findUser };
};

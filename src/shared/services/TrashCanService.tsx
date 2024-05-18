import { AxiosResponse } from "axios";

import { FORMAPI } from "@/shared";

export const TrashCanService = () => {
  const URL = "api/v1/litterBin";

  const load = async (body: TrashCan.LoadReqDto) => {
    const { data } = (await FORMAPI.post(
      `${URL}/find/location`,
      body
    )) as AxiosResponse<TrashCan.LoadResDto>;

    return data;
  };

  return { load };
};

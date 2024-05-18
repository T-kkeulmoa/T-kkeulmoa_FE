import { AxiosResponse } from "axios";

import { FORMAPI } from "@/shared";

export const ScanService = () => {
  const URL = "api/v1/scan";

  const upload = async (data: FormData) => {
    const {
      data: { imageUrl },
    } = (await FORMAPI.post(
      `${URL}`,
      data
    )) as AxiosResponse<Scan.UploadResDto>;

    return imageUrl;
  };

  return { upload };
};

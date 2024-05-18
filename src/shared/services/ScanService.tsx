import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

import { FORMAPI, PAGE_URL } from "@/shared";

export const ScanService = () => {
  const URL = "api/v1/scan";

  const navigate = useNavigate();

  const upload = async (data: FormData) => {
    const {
      data: { imageUrl, methods },
    } = (await FORMAPI.post(
      `${URL}`,
      data
    )) as AxiosResponse<Scan.UploadResDto>;

    navigate(PAGE_URL.EcoScanResult, { state: { imageUrl, methods } });
  };

  return { upload };
};

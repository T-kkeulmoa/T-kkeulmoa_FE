import { useNavigate } from "react-router";

import {
  PlusTitle,
  CloseButton,
  AppliancesRecycleImg,
  ScanTitle,
  Height,
} from "@/entities";
import { PAGE_URL } from "@/shared";

const AppliancesRecyclePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <ScanTitle>가전 분리 가이드</ScanTitle>
      <CloseButton onClick={() => navigate(PAGE_URL.Home)}>
        <img src="/imgs/close.svg" alt="close" />
      </CloseButton>
      <Height height="50px" />
      <PlusTitle>대형 페기물 배출 안내</PlusTitle>
      <AppliancesRecycleImg
        src="/imgs/appliances_detail.png"
        alt="appliances_detail"
      />
    </>
  );
};

export default AppliancesRecyclePage;

import { useNavigate } from "react-router-dom";

import { FooterContainer, RowContainer, SmallSubTitle } from "@/entities";
import { PAGE_URL } from "@/shared";

export const Footer = ({ state }: { state: "HOME" | "ML" | "GROUP" }) => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <RowContainer>
        <SmallSubTitle>
          {state == "HOME" ? (
            <img src="/imgs/home_on.svg" alt="home_on" />
          ) : (
            <img
              src="/imgs/home_off.svg"
              alt="home_off"
              onClick={() => {
                navigate(PAGE_URL.Home);
              }}
            />
          )}
        </SmallSubTitle>
        <SmallSubTitle>
          {state == "ML" ? (
            <img src="/imgs/ml_on.svg" alt="ml_on" />
          ) : (
            <img
              src="/imgs/ml_off.svg"
              alt="ml_off"
              onClick={() => {
                navigate(PAGE_URL.EcoScan);
              }}
            />
          )}
        </SmallSubTitle>
        <SmallSubTitle>
          {state == "GROUP" ? (
            <img src="/imgs/group_on.svg" alt="group_on" />
          ) : (
            <img
              src="/imgs/group_off.svg"
              alt="group_off"
              onClick={() => {
                navigate(PAGE_URL.EcoBadge);
              }}
            />
          )}
        </SmallSubTitle>
      </RowContainer>
      <RowContainer>
        <SmallSubTitle>홈</SmallSubTitle>
        <SmallSubTitle>에코 스캔</SmallSubTitle>
        <SmallSubTitle>에코 뱃지</SmallSubTitle>
      </RowContainer>
    </FooterContainer>
  );
};

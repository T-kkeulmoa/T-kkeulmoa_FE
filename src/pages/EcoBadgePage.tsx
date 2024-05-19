import { useEffect } from "react";

import {
  ColumnContainer,
  RowContainer,
  BadgeSubTitle,
  SubTitle,
  Height,
} from "@/entities";
import { Footer } from "@/widgets";
import { AuthService, useUserState } from "@/shared";

const EcoBadgePage = () => {
  const rewardLevel = useUserState((state) => state.rewardLevel);
  const { findUser } = AuthService();

  useEffect(() => {
    findUser();
  }, []);

  return (
    <>
      <ColumnContainer>
        <img src="/imgs/badge/main.png" alt="main" />
        <Height height="30px" />
        <SubTitle>티끌 점수를 모아 뱃지를 얻어보세요!</SubTitle>
        <RowContainer>
          {rewardLevel > 0 ? (
            <img src="/imgs/badge/001.png" alt="001" />
          ) : (
            <img src="/imgs/badge/off.png" alt="off" />
          )}
          {rewardLevel > 1 ? (
            <img src="/imgs/badge/002.png" alt="002" />
          ) : (
            <img src="/imgs/badge/off.png" alt="off" />
          )}
          {rewardLevel > 2 ? (
            <img src="/imgs/badge/003.png" alt="003" />
          ) : (
            <img src="/imgs/badge/off.png" alt="off" />
          )}
        </RowContainer>
        <RowContainer>
          <BadgeSubTitle>티끌 100</BadgeSubTitle>
          <BadgeSubTitle>티끌 200</BadgeSubTitle>
          <BadgeSubTitle>티끌 300</BadgeSubTitle>
        </RowContainer>
        <RowContainer>
          {rewardLevel > 3 ? (
            <img src="/imgs/badge/004.png" alt="004" />
          ) : (
            <img src="/imgs/badge/off.png" alt="off" />
          )}
          {rewardLevel > 4 ? (
            <img src="/imgs/badge/005.png" alt="005" />
          ) : (
            <img src="/imgs/badge/off.png" alt="off" />
          )}
          {rewardLevel > 5 ? (
            <img src="/imgs/badge/006.png" alt="006" />
          ) : (
            <img src="/imgs/badge/off.png" alt="off" />
          )}
        </RowContainer>
        <RowContainer>
          <BadgeSubTitle>티끌 400</BadgeSubTitle>
          <BadgeSubTitle>티끌 500</BadgeSubTitle>
          <BadgeSubTitle>티끌 600</BadgeSubTitle>
        </RowContainer>
        <RowContainer>
          {rewardLevel > 6 ? (
            <img src="/imgs/badge/007.png" alt="007" />
          ) : (
            <img src="/imgs/badge/off.png" alt="off" />
          )}
          {rewardLevel > 7 ? (
            <img src="/imgs/badge/008.png" alt="008" />
          ) : (
            <img src="/imgs/badge/off.png" alt="off" />
          )}
          {rewardLevel > 8 ? (
            <img src="/imgs/badge/009.png" alt="009" />
          ) : (
            <img src="/imgs/badge/off.png" alt="off" />
          )}
        </RowContainer>
        <RowContainer>
          <BadgeSubTitle>티끌 700</BadgeSubTitle>
          <BadgeSubTitle>티끌 800</BadgeSubTitle>
          <BadgeSubTitle>티끌 900</BadgeSubTitle>
        </RowContainer>
      </ColumnContainer>
      <Footer state="GROUP" />
    </>
  );
};

export default EcoBadgePage;

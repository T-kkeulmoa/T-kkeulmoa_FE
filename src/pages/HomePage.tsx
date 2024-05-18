import {
  HeaderContainer,
  HeaderTitle,
  GridContainer,
  PointContainer,
  TrashCanButton,
  AppliancesRecycleButton,
  RecycleInfoButton,
  GraphContainer,
  DottedLine1,
  DottedLine2,
  PointImg,
  AppliancesImg,
  TrashCanImg,
  InfoImg,
  PointTitle,
  PointHiliteTitle,
  AppliancesTitle,
  InfoTitle,
  TrashCanTitle,
  TrashCanSubTitle,
} from "@/entities";

import { Footer } from "@/widgets";

import { useUserState } from "@/shared";

const Home = () => {
  const nickname = useUserState((state) => state.nickname);
  const point = useUserState((state) => state.point);

  return (
    <>
      <GridContainer>
        <HeaderContainer>
          <img src="/imgs/logo_small.png" alt="logo" />
          <HeaderTitle>T끌 모아</HeaderTitle>
          <img src="/imgs/ion_options-sharp.svg" alt="option" />
          <img src="/imgs/codicon_bell.svg" alt="bell" />
        </HeaderContainer>
        <PointContainer>
          <PointTitle>
            {nickname} 님의
            <br />
            <PointHiliteTitle>티끌 </PointHiliteTitle>포인트는
            <br />
            {point} Point 입니다.
          </PointTitle>
          <PointImg src="/imgs/point.png" alt="point" />
        </PointContainer>
        <DottedLine1 />
        <TrashCanButton>
          <TrashCanTitle>쓰레기통 위치</TrashCanTitle>
          <TrashCanSubTitle>
            주변의 쓰레기통
            <br />
            위치를 확인해보세요
          </TrashCanSubTitle>
          <TrashCanImg src="/imgs/trashcan.png" alt="point" />
        </TrashCanButton>
        <AppliancesRecycleButton>
          <AppliancesTitle>
            가전 분리 <br />
            가이드
          </AppliancesTitle>
          <AppliancesImg src="/imgs/appliances.png" alt="point" />
        </AppliancesRecycleButton>
        <RecycleInfoButton>
          <InfoTitle>
            분리수거
            <br />
            모아모아
          </InfoTitle>
          <InfoImg src="/imgs/info.png" alt="point" />
        </RecycleInfoButton>
        <DottedLine2 />
        <GraphContainer></GraphContainer>
      </GridContainer>
      <Footer state="HOME" />
    </>
  );
};

export default Home;

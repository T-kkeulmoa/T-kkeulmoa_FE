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
} from "@/entities";

import { Footer } from "@/widgets";

const Home = () => {
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
          <PointImg src="/imgs/point.png" alt="point" />
        </PointContainer>
        <DottedLine1 />
        <TrashCanButton>
          <TrashCanImg src="/imgs/trashcan.png" alt="point" />
        </TrashCanButton>
        <AppliancesRecycleButton>
          <AppliancesImg src="/imgs/appliances.png" alt="point" />
        </AppliancesRecycleButton>
        <RecycleInfoButton>
          <InfoImg src="/imgs/info.png" alt="point" />
        </RecycleInfoButton>
        <DottedLine2 />
        <GraphContainer></GraphContainer>
      </GridContainer>
      <Footer />
    </>
  );
};

export default Home;

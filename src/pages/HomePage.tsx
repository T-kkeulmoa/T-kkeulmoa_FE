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
} from "@/entities";

const Home = () => {
  return (
    <GridContainer>
      <HeaderContainer>
        <HeaderTitle>T끌 모아</HeaderTitle>
      </HeaderContainer>
      <PointContainer />
      <DottedLine1 />
      <TrashCanButton />
      <AppliancesRecycleButton />
      <RecycleInfoButton />
      <DottedLine2 />
      <GraphContainer />
    </GridContainer>
  );
};

export default Home;

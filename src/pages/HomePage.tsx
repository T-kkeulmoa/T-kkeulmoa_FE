import { useEffect } from "react";
import { useNavigate } from "react-router";
import { PieChart, Pie, Tooltip } from "recharts";

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
  GraphSubTitle,
  GraphTitle,
  RowContainer,
  GraphElementTitle,
  GraphBar,
  Graph99Title,
  Height,
} from "@/entities";

import { Footer } from "@/widgets";

import { PAGE_URL, useUserState, AuthService } from "@/shared";

const Home = () => {
  const navigate = useNavigate();
  const nickname = useUserState((state) => state.nickname);
  const point = useUserState((state) => state.point);
  const memberRecycleRecordResponseDto = useUserState(
    (state) => state.memberRecycleRecordResponseDto
  );

  const { findUser } = AuthService();

  const data = [
    {
      name: "일반쓰레기",
      value: memberRecycleRecordResponseDto.normalRecycleCount,
      fill: "#FDD849",
    },
    {
      name: "플라스틱",
      value: memberRecycleRecordResponseDto.plasticRecycleCount,
      fill: "#9AB2D4",
    },
    {
      name: "캔/유리",
      value: memberRecycleRecordResponseDto.plasticRecycleCount,
      fill: "#EB6927",
    },
    {
      name: "종이",
      value: memberRecycleRecordResponseDto.paperRecycleCount,
      fill: "#AAD59F",
    },
    {
      name: "기타",
      value: memberRecycleRecordResponseDto.otherRecycleCount,
      fill: "#CDBCDC",
    },
  ];

  useEffect(() => {
    findUser();
  }, []);

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
            {nickname}님의
            <br />
            <PointHiliteTitle>티끌 </PointHiliteTitle>포인트는
            <br />
            {point} Point 입니다.
          </PointTitle>
          <PointImg src="/imgs/point.png" alt="point" />
        </PointContainer>
        <DottedLine1 />
        <TrashCanButton onClick={() => navigate(PAGE_URL.TrashCan)}>
          <TrashCanTitle>쓰레기통 위치</TrashCanTitle>
          <TrashCanSubTitle>
            주변의 쓰레기통
            <br />
            위치를 확인해보세요
          </TrashCanSubTitle>
          <TrashCanImg src="/imgs/trashcan.png" alt="point" />
        </TrashCanButton>
        <AppliancesRecycleButton
          onClick={() => navigate(PAGE_URL.AppliancesRecycle)}
        >
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
        <GraphContainer>
          <GraphSubTitle>2024년 12월 31일</GraphSubTitle>
          <GraphTitle>{nickname}님의 티끌모아 그래프 📊</GraphTitle>
          <PieChart width={230} height={230}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={62}
              outerRadius={110}
              paddingAngle={2}
              cx={110}
              cy={110}
            />
            <Tooltip />
          </PieChart>
          <Height height="12px" />
          <RowContainer>
            <GraphElementTitle>일반쓰레기</GraphElementTitle>
            <GraphBar color="#FDD849" number={50} />
            <Graph99Title>99</Graph99Title>
          </RowContainer>
          <RowContainer>
            <GraphElementTitle>플라스틱</GraphElementTitle>
            <GraphBar color="#9AB2D4" number={50} />
            <Graph99Title>99</Graph99Title>
          </RowContainer>
          <RowContainer>
            <GraphElementTitle>캔/유리</GraphElementTitle>
            <GraphBar color="#EF753E" number={50} />
            <Graph99Title>99</Graph99Title>
          </RowContainer>
          <RowContainer>
            <GraphElementTitle>종이</GraphElementTitle>
            <GraphBar color="#AAD59F" number={50} />
            <Graph99Title>99</Graph99Title>
          </RowContainer>
          <RowContainer>
            <GraphElementTitle>기타</GraphElementTitle>
            <GraphBar color="#CDBCDC" number={50} />
            <Graph99Title>99</Graph99Title>
          </RowContainer>
        </GraphContainer>
      </GridContainer>
      <Footer state="HOME" />
    </>
  );
};

export default Home;

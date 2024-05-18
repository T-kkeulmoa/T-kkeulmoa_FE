import {
  KakaoMap,
  CardContainer,
  TrashCard,
  CardSubContainer,
  CardImg,
  CardTitle,
  CardAddress,
  CardDist,
  Button1,
  Button2,
  CardHiliteTitle,
} from "@/entities";

const TrashCanPage = () => {
  return (
    <>
      <KakaoMap />
      <CardContainer>
        <CardSubContainer>
          <TrashCard>
            <CardImg src="/imgs/trashcan_ex.png" />
            <CardTitle>
              <CardHiliteTitle>일반쓰레기</CardHiliteTitle>분리수거통
            </CardTitle>
            <CardAddress>주소: 중앙대학교 내부</CardAddress>
            <CardDist>거리: 1km 이내</CardDist>
            <Button1>티끌 모으기</Button1>
            <Button2>위치 알리기</Button2>
          </TrashCard>
          <TrashCard>
            <CardImg src="/imgs/trashcan_ex.png" />
            <CardTitle>일반쓰레기 분리수거통</CardTitle>
            <CardAddress>주소: 중앙대학교 내부</CardAddress>
            <CardDist>거리: 1km 이내</CardDist>
            <Button1>티끌 모으기</Button1>
            <Button2>위치 알리기</Button2>
          </TrashCard>
          <TrashCard>
            <CardImg src="/imgs/trashcan_ex.png" />
            <CardTitle>일반쓰레기 분리수거통</CardTitle>
            <CardAddress>주소: 중앙대학교 내부</CardAddress>
            <CardDist>거리: 1km 이내</CardDist>
            <Button1>티끌 모으기</Button1>
            <Button2>위치 알리기</Button2>
          </TrashCard>
        </CardSubContainer>
      </CardContainer>
    </>
  );
};

export default TrashCanPage;

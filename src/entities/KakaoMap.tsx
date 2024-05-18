import styled from "styled-components";

const KakaoMap = () => {
  const options = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.d
    level: 3, //지도의 레벨(확대, 축소 정도)
  };
  return <Map id="map"></Map>;
};

const Map = styled.div`
  width: 500px;
  height: 500px;
`;

export default KakaoMap;

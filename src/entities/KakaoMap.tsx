import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

import { PAGE_URL, useGeoLocation } from "@/shared";

import { CloseButton } from "@/entities";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

export const KakaoMap = () => {
  const navigate = useNavigate();

  const { location } = useGeoLocation(geolocationOptions);
  const [locationState, setLocationState] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 33.450701,
    longitude: 126.570667,
  });
  useEffect(() => {
    if (location)
      setLocationState({
        latitude: location.latitude,
        longitude: location.longitude,
      });
  }, [location]);

  useEffect(() => {
    const container = document.getElementById(`map`); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new window.kakao.maps.LatLng(
        locationState.latitude,
        locationState.longitude
      ), // 지도 중심 좌표
      level: 2, // 지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

    const positions = [
      {
        title: "유저",
        latlng: new window.kakao.maps.LatLng(
          locationState.latitude,
          locationState.longitude
        ),
      },
      {
        title: "일반쓰레기",
        latlng: new window.kakao.maps.LatLng(
          locationState.latitude + 0.0009,
          locationState.longitude + 0.0001
        ),
      },
      {
        title: "일반쓰레기",
        latlng: new window.kakao.maps.LatLng(
          locationState.latitude + 0.0007,
          locationState.longitude + 0.0005
        ),
      },
    ];

    const imgSrc = "/imgs/user.png";
    const imgSize = new window.kakao.maps.Size(60, 60);

    const markerImg = new window.kakao.maps.MarkerImage(imgSrc, imgSize);

    const basicImg = "/imgs/basicpointer.png";
    const basicImgSize = new window.kakao.maps.Size(60, 60);
    const basicMarkerImg = new window.kakao.maps.MarkerImage(
      basicImg,
      basicImgSize
    );

    const marker1 = new window.kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[0].latlng, // 마커를 표시할 위치
      title: positions[0].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImg, // 마커 이미지
    });

    const marker2 = new window.kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[1].latlng, // 마커를 표시할 위치
      title: positions[1].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: basicMarkerImg, // 마커 이미지
    });

    const marker3 = new window.kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[2].latlng, // 마커를 표시할 위치
      title: positions[2].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: basicMarkerImg, // 마커 이미지
    });

    marker1.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
  }, [locationState]);

  return (
    <>
      <Map id="map" />
      <CloseButton onClick={() => navigate(PAGE_URL.Home)}>
        <img src="/imgs/close.svg" alt="close" />
      </CloseButton>
    </>
  );
};

const Map = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  width: 100vw;
  height: 80%;
`;

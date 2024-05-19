import { http, HttpResponse, ResponseResolver } from "msw";

const postSignIn: ResponseResolver = () => {
  return HttpResponse.json({
    id: "1",
    nickname: "강밍키",
    point: 440,
  });
};

const postHome: ResponseResolver = () => {
  return HttpResponse.json({
    nickname: "강밍키",
    point: 440,
    rewardLevel: 4,
    memberRecycleRecordResponseDto: {
      memberId: 0,
      recycleCountSum: 160,
      normalRecycleCount: 50,
      plasticRecycleCount: 70,
      canGlassRecycleCount: 20,
      paperRecycleCount: 10,
      otherRecycleCount: 10,
    },
  });
};

const postTrash: ResponseResolver = () => {
  return HttpResponse.json({
    imageUrl: "/imgs/scan_demo.jpg",
    trashTypeResponseDtoList: [
      {
        trashTypeName: "플라스틱 포장지",
        trashTypeContent:
          "포장비닐을 분리배출 할 때는 이물질이 남지 않도록 세척하는 것이 중요합니다. 세척되지 않은 비닐은 재활용 과정에서 오염을 일으킬 수 있으므로 세임한 주의가 필요합니다.",
      },
      {
        trashTypeName: "플라스틱 식기",
        trashTypeContent:
          "플라스틱 포크와 같이 작은 플라스틱은 너무 작아 선별하기도 어렵고 선별기계에 끼이게 되면 오히려 선별을 방해한답니다. 재활용 수거함에 넣지 말고 종량제 봉투에 바로 넣어주세요!",
      },
      {
        trashTypeName: "종이",
        trashTypeContent:
          "신문지는 물기에 젖지 않도록 반듯하게 펴서 배출합니다. 책자, 노트는 스프링 등 종이류가 아닌 재질 제거 후 배출합니다. 이외의 종이(영수증, 종이 호일, 종이 테이프 등)는 재활용이 불가능하니 일반쓰레기로 버려야합니다.",
      },
    ],
  });
};

const handlers = [
  http.post("api/v1/member/signin", postSignIn),
  http.get("api/v1/member/find", postHome),
  http.post("api/v1/trash", postTrash),
];

export default handlers;

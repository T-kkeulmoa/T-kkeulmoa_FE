import styled from "@emotion/styled";

export const TrashCard = styled.div`
  display: grid;

  grid-template-areas:
    "img title title"
    "img address address"
    "img dist dist"
    "img button1 button2";

  width: 271px;
  height: 128px;
  border-radius: 30px;
  background: #fff;

  /* shadow04 */
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.7);

  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;

  padding: 20px 20px 9px 20px;
`;

export const CardImg = styled.img`
  grid-area: img;
  object-fit: cover;
  width: 70px;
  height: 93px;
  border-radius: 10px;
`;

export const CardTitle = styled.div`
  grid-area: title;

  color: var(--Shark-950, #222);
  font-family: "Gmarket Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;

export const CardHiliteTitle = styled.span`
  color: var(--Shark-950, #ffd038);
  font-family: "Gmarket Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;

export const CardAddress = styled.div`
  grid-area: address;

  color: var(--Shark-900, #3d3d3d);
  font-family: "Gmarket Sans";
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 14px; /* 140% */
`;

export const CardDist = styled(CardAddress)`
  grid-area: dist;
`;

export const Button1 = styled.div`
  grid-area: button1;
  display: inline-flex;
  padding: 5px 7px;
  justify-content: center;
  align-items: center;

  font-size: 10px;

  height: 30px;

  border-radius: 12px;
  background: var(--Foundation-Green-Normal, #98fb98);
`;

export const Button2 = styled(Button1)`
  grid-area: button2;
  background: var(--ETC-light, #ffe0b2);
  margin-left: 3px;
`;

import styled from "styled-components";

export const LargeTitle = styled.div`
  font-size: 28px;
  font-weight: bold;

  margin-bottom: 5px;
`;

export const MiddleTitle = styled.div`
  font-size: 18px;
  font-weight: normal;
  color: white;
`;

export const HeaderTitle = styled(MiddleTitle)`
  font-weight: bold;
  color: black;

  margin-right: 200px;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: var(--Shark-400, var(--gray05, #888));

  margin-bottom: 20px;
`;

export const PointTitle = styled.span`
  position: absolute;
  top: 36px;
  left: 30px;

  color: var(--Shark-950, #222);

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
`;

export const PointHiliteTitle = styled(PointTitle)`
  position: static;

  color: #43e26b;
`;

export const AppliancesTitle = styled.div`
  position: absolute;
  left: 18px;
  top: 15px;

  color: var(--BasicBlack, #000);

  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
`;

export const InfoTitle = styled.div`
  position: absolute;
  left: 18px;
  top: 15px;

  color: var(--BasicBlack, #000);

  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
`;

export const TrashCanTitle = styled.div`
  position: absolute;
  left: 18px;
  top: 29px;

  color: var(--BasicBlack, #000);

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
`;

export const TrashCanSubTitle = styled.div`
  position: absolute;
  left: 18px;
  top: 58px;

  color: var(--Shark-400, var(--gray05, #888));
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SmallSubTitle = styled.div`
  width: 51px;
  color: var(--BasicBlack, #000);

  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ScanSubTitle = styled.span`
  color: var(--Shark-400, var(--gray05, #888));
  text-align: center;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  width: 260px;

  position: absolute;
  bottom: 19%;
  left: 50%;
  transform: translate(-50%);
`;

export const ScanTitle = styled(PointTitle)`
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translate(-50%);
`;

export const BadgeSubTitle = styled.div`
  width: 88px;
  text-align: center;

  color: var(--BasicBlack, #000);

  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 30px;
`;

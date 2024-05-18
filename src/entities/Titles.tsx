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

  margin-bottom: 140px;
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

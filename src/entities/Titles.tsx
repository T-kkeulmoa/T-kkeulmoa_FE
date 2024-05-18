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

import styled from "styled-components";

export const BasicLine = styled.div`
  width: 312px;
  height: 1px;
  background: #bdbdbd;
`;

export const DottedLine1 = styled.div`
  grid-area: line1;

  width: 100%;
  height: 1px;
  background: none;

  border: 0px;
  border-top: 1px solid #a2a2a2;
  border-style: dashed;

  margin-top: 21px;
  margin-bottom: 21px;
`;

export const DottedLine2 = styled(DottedLine1)`
  grid-area: line2;
`;

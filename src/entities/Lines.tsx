import styled from "@emotion/styled";
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

export const GraphBar = ({
  number,
  color,
}: {
  number: number;
  color: string;
}) => {
  return (
    <GraphEmptyBar>
      <GraphSolidBar
        style={{ width: `${(200 * number) / 99}px`, background: color }}
      ></GraphSolidBar>
    </GraphEmptyBar>
  );
};

const GraphSolidBar = styled.div`
  left: 0px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 999px;
`;

const GraphEmptyBar = styled.div`
  width: 200px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 999px;
  background: var(--Gray-Gray02, #e9e9e9);
`;

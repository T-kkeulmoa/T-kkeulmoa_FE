import styled from "styled-components";

export const Height = ({ height }: { height: string }) => {
  const Height = styled.div`
    height: ${height};
    width: 1px;
  `;
  return <Height></Height>;
};

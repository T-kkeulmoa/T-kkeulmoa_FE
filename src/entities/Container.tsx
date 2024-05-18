import styled from "@emotion/styled";

export const FormContainer = styled.form`
  position: absolute;
  top: 0ex;
  left: 0px;

  display: flex;

  width: 100vw;
  height: 100vh;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WhiteFormContainer = styled(FormContainer)`
  background-color: white;
`;

export const HeaderContainer = styled.div`
  grid-area: header;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 10px;
  margin-bottom: 20px;
`;

export const GridContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);

  grid-column-gap: 22px;

  display: grid;
  grid-template-areas:
    "header header"
    "point point"
    "line1 line1"
    "trash-can appliances-recycle"
    "trash-can recycle-info"
    "line2 line2"
    "graph graph";
`;

export const PointContainer = styled.div`
  grid-area: point;

  width: 390px;
  height: 163px;
  flex-shrink: 0;

  border-radius: 30px;
  background: #fff;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const GraphContainer = styled.div`
  grid-area: graph;

  display: flex;
  width: 389px;
  height: 486px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 30px;
  background: #fff;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
`;

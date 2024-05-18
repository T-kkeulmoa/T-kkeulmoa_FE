import styled from "styled-components";

export const SubmitButton = styled.button`
  display: flex;
  width: 300px;
  height: 50px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  font-size: 16px;
  font-weight: bold;

  text-align: center;

  border: 0px;
  border-radius: 12px;
  background: #98fb98;

  margin-top: 15px;
  margin-bottom: 25px;
`;

export const ScanSubmitButton = styled(SubmitButton)`
  position: absolute;

  width: 205px;
  height: 35px;
  border-radius: 12px;

  bottom: 10%;
  left: 50%;
  transform: translate(-50%);
`;

export const SignUpButton = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: var(--Shark-400, var(--gray05, #888));

  margin-top: 12px;
`;

export const TrashCanButton = styled.div`
  position: relative;

  grid-area: trash-can;

  width: 175px;
  height: 235px;
  flex-shrink: 0;

  border-radius: 30px;
  background: #fff;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const AppliancesRecycleButton = styled.div`
  position: relative;

  grid-area: appliances-recycle;

  width: 187px;
  height: 108px;
  flex-shrink: 0;

  border-radius: 30px;
  background: #fff;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const RecycleInfoButton = styled.div`
  position: relative;

  grid-area: recycle-info;

  width: 187px;
  height: 108px;
  flex-shrink: 0;

  border-radius: 30px;
  background: #fff;

  margin-top: 17px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
`;

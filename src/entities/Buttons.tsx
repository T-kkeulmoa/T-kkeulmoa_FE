import styled from "styled-components";

export const Input = styled.input`
  width: 267px;
  height: 47px;
  flex-shrink: 0;

  border-radius: 100px;
  border: 1px solid var(--button-Sub, #bdbdbd);

  font-weight: bold;

  &::placeholder {
    text-align: center;
  }
`;

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
`;

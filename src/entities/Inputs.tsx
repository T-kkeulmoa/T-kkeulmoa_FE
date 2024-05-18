import styled from "styled-components";

export const Input = styled.input`
  width: 267px;
  height: 47px;
  flex-shrink: 0;

  border-radius: 100px;
  border: 1px solid var(--button-Sub, #bdbdbd);

  width: 297px;

  margin-top: 5px;
  margin-bottom: 9px;

  font-weight: bold;
  font-size: 13px;

  text-align: center;
`;

export const TransparencyInput = styled(Input)`
  background: none;

  border: 1px solid var(--black-white-white, #fff);

  color: white;
  font-size: 13px;

  &::placeholder {
    color: var(--ETC-default, #ffbf69);
  }
`;

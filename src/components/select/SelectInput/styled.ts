import styled, { css } from "styled-components";

interface InputProps {
  $isErrors?: boolean;
  $isOpen?: boolean;
}

export const Input = styled.input<InputProps>`
  color: black;
  font-size: 16px;
  padding: 12px 8px 12px 8px;
  cursor: pointer;
  width: 100%;

  &::placeholder {
    color: black;
  }

  &:focus {
    border-color: #000000;
    outline: none;

    ${(props) =>
      props.$isErrors &&
      css`
        border-color: #ff0000;
      `};
  }

  ${(props) =>
    props.$isErrors &&
    css`
      border-color: #ff0000;
    `}
`;

export const ImgIcon = styled.img<InputProps>`
  width: 20px;
  height: 20px;
  cursor: pointer;  

  ${(props) =>
    props.$isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export const Wrapper = styled.div<InputProps>`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #9d9a9a;
  justify-content: space-between;
  padding-right: 8px;
`;

export const Shell = styled.div`
  width: 100%;
`;

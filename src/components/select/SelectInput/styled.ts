import styled, { css } from "styled-components";

interface InputProps {
  $isErrors?: boolean;
}

export const Input = styled.input<InputProps>`
  color: black;
  font-size: 16px;
  padding: 12px 8px 12px 8px;
  border-bottom: 2px solid #9d9a9a;

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

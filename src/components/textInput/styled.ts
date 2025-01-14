import styled, { css } from "styled-components";

interface InputProps {
  $isErrors?: boolean;
}

export const Input = styled.input<InputProps>`
  border-bottom: 2px solid #9d9a9a;
  font-size: 16px;
  padding: 12px 8px 12px 8px;
  width: 100%;

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

export const Wrapper = styled.div`
  width: 100%;
`;

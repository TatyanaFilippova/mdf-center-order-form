import styled, { css } from "styled-components";

interface TextAreaProps {
  $isErrors?: boolean;
}

export const TextAreaStyled = styled.textarea<TextAreaProps>`
  border-bottom: 2px solid #9d9a9a;
  font-size: 24px;
  padding: 12px 172px 12px 8px;

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

import styled, { css } from "styled-components";

interface Props {
  $messageErrors?: string;
}

export const TextStyled = styled.div<Props>`
  padding-left: 8px;
  padding-right: 8px;
  font-size: 12px;
  color: #9d9a9a;
  padding-top: 5px;

  ${(props) =>
    props.$messageErrors &&
    css`
      color: #ff0000;
    `}
  ${(props) =>
    props.$messageErrors &&
    css`
      color: #ff0000;
    `}
`;

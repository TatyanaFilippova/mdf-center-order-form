import styled, { css } from "styled-components";

interface WrapperProps {
  $status?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  border-radius: 4px;
  display: inline-block;
  color: white;
  ${(props) =>
    props.$status === "todo" &&
    css`
      background-color: #30b0c7;
    `}
  ${(props) =>
    props.$status === "inProgress" &&
    css`
      background-color: #7a7a7a;
    `}
   ${(props) =>
    props.$status === "expired" &&
    css`
      background-color: #ff0000;
    `}
   ${(props) =>
    props.$status === "ready" &&
    css`
      background-color: #41d241;
    `}
`;

export const Title = styled.div`
  font-size: 12px;
  padding: 2px 5px 2px 5px;
`;

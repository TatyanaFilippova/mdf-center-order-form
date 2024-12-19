import styled, { css } from "styled-components";

interface InputProps {
  $isErrors?: boolean
}

export const Input = styled.input<InputProps>`
  border-bottom: 2px solid #E5D8D8;
  width: 100%;
  font-size: 24px;
  padding-bottom: 12px;
  padding-top: 12px;
  margin-top: 40px;

  &:focus {
    border-color: #3A3A3A;
    outline: none; 

    ${props => props.$isErrors && css`
    border-color: rgb(141, 37, 37);
  `}
  };

   ${props => props.$isErrors && css`
    border-color:rgb(141, 37, 37);
  `}
 
`
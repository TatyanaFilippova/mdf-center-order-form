import styled, { css } from "styled-components";

interface InputProps {
  $isErrors?: boolean;
}

export const Container = styled.label`
  display: flex;
  width: 354px;
  height: 64px;

  margin-top: 8px;
  padding-bottom: 3px;
  cursor: pointer;
  font-size: 24px;
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    color: #025a6a;
    height: 64px;
    width: 177px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e5e5e5;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
  }

  /* When the radio button is checked, add a blue background */
  & input:checked ~ .checkmark {
    background-color: #025a6a;
    color: #ffffff;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  &input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  & .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

export const RadioInputStyled = styled.input<InputProps>`
  border-bottom: 2px solid #9d9a9a;
  font-size: 24px;
  padding: 12px 8px 12px 8px;
  position: absolute;

  height: 64px;
  width: 177px;

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
  display: flex;
  width: 354px;
`;

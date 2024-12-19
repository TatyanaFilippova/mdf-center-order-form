import styled from "styled-components";

export const Container = styled.label`
  display: block;
  position: relative;

  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    height: 24px;
    width: 24px;
    background-color: #ffffff;
    border: 1px solid #025a6a;
    border-radius: 2px;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: #025a6a;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const CheckboxInputStyled = styled.input`
  border-bottom: 2px solid #9d9a9a;

  position: absolute;

  &:focus {
    border-color: #000000;
    outline: none;
  }
`;

export const Wrapper = styled.label``;

export const Text = styled.div`
  margin-left: 46px;
  font-size: 16px;
`;

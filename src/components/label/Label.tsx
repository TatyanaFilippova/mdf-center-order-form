import { TextStyled } from "./styled";

interface Text {
  text?: string;
}

const Label = ({ text }: Text) => {
  return <TextStyled>{text}</TextStyled>;
};

export default Label;

import { CheckboxInputStyled, Container, Wrapper, Text } from "./styled";

interface TextInputProps {
  label?: string;
}

const CheckboxInput = ({ label }: TextInputProps) => {
  return (
    <div>
      <Wrapper>
        <Container>
          <CheckboxInputStyled type="checkbox" />
          <span className="checkmark"></span>
        </Container>
        <Text>{label}</Text>
      </Wrapper>
    </div>
  );
};

export default CheckboxInput;

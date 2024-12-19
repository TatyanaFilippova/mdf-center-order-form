import Label from "../label/Label";
import Message from "../message/Message";
import { Container, RadioInputStyled,Wrapper  } from "./styled";

interface TextInputProps {
  placeholder?: string;
  label?: string;
  message?: string;
  isErrors?: boolean;
  messageErrors?: string;
}

const RadioInput = ({
  label,
  message,
  placeholder,
  isErrors,
  messageErrors,
}: TextInputProps) => {
  return (
    <div>
      <Label text={label} />
      <Wrapper>
        <Container>
          <RadioInputStyled
            placeholder={placeholder}
            $isErrors={isErrors}
            type="radio"
            name="radio"
          />

          <span className="checkmark">Да</span>
        </Container>
        <Container>
          <RadioInputStyled
            placeholder={placeholder}
            $isErrors={isErrors}
            type="radio"
            name="radio"
          />
          <span className="checkmark">Нет</span>
        </Container>
      </Wrapper>
      <Message text={message} messageErrors={messageErrors} />
    </div>
  );
};

export default RadioInput;

import Label from "../label/Label";
import Message from "../message/Message";
import { TextAreaStyled } from "./styled";

interface TextAreaProps {
  placeholder?: string;
  label?: string;
  message?: string;
  isErrors?: boolean;
  messageErrors?: string;
}

const TextArea = ({
  label,
  message,
  placeholder,
  isErrors,
  messageErrors,
}: TextAreaProps) => {
  return (
    <div>
      <Label text={label} />
      <TextAreaStyled placeholder={placeholder} $isErrors={isErrors} />
      <Message text={message} messageErrors={messageErrors} />
    </div>
  );
};

export default TextArea;

import Label from "../../label/Label";
import Message from "../../message/Message";
import { Input } from "./styled";

interface TextInputProps {
  placeholder?: string;
  label?: string;
  message?: string;
  isErrors?: boolean;
  messageErrors?: string;
}

const TextInput = ({
  label,
  message,
  placeholder,
  isErrors,
  messageErrors,
}: TextInputProps) => {
  return (
    <div>
      <Label text={label} />
      <Input placeholder={placeholder} $isErrors={isErrors} />
      <Message text={message} messageErrors={messageErrors} />
    </div>
  );
};

export default TextInput;

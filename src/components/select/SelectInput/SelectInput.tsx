import Label from "../../label/Label";
import Message from "../../message/Message";
import { ImgIcon, Input, Wrapper } from "./styled";
import icon from "../assets/Vector.svg";
import { useState } from "react";

interface TextInputProps {
  placeholder?: string;
  label?: string;
  message?: string;
  isErrors?: boolean;
  messageErrors?: string;
  isOpen?: boolean;
}

const TextInput = ({
  
  message,
  label,
  placeholder,
  isErrors,
  messageErrors,
}: TextInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Label text={label} />
      <Wrapper onClick={() => setIsOpen(!isOpen)}>
        <Input placeholder={placeholder} $isErrors={isErrors} />
        <ImgIcon src={icon.src} $isOpen={isOpen} />
      </Wrapper>
      <Message text={message} messageErrors={messageErrors} />
    </div>
  );
};

export default TextInput;

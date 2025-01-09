import Label from "../../label/Label";
import Message from "../../message/Message";
import { ImgIcon, Input, Wrapper } from "./styled";
import icon from "../assets/Vector.svg";

interface TextInputProps {
  placeholder?: string;
  label?: string;
  message?: string;
  isErrors?: boolean;
  messageErrors?: string;
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SelectInput = ({
  message,
  label,
  placeholder,
  isErrors,
  messageErrors,
  isOpen,
  setIsOpen,
}: TextInputProps) => {
  return (
    <div>
      <Label text={label} />
      <Wrapper onClick={() => setIsOpen(!isOpen)}>
        <Input placeholder={placeholder} $isErrors={isErrors} readOnly />
        <ImgIcon src={icon.src} $isOpen={isOpen} />
      </Wrapper>
      <Message text={message} messageErrors={messageErrors} />
    </div>
  );
};

export default SelectInput;

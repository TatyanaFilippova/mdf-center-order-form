import Label from "../../label/Label";
import Message from "../../message/Message";
import { ImgIcon, Input, Shell, Wrapper } from "./styled";
import icon from "../assets/Vector.svg";

interface TextInputProps {
  placeholder?: string;
  label?: string;
  message?: string;
  isErrors?: boolean;
  messageErrors?: string;
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
  value: string;
  items: {
    label: string;
    value: string;
  }[];
}

const SelectInput = ({
  message,
  label,
  placeholder,
  isErrors,
  messageErrors,
  isOpen,
  setIsOpen,
  value,
  items
}: TextInputProps) => {
  const active = items.find((item) => {
    return value === item.value
  })
  return (

    <Shell>
      <Label text={label} />
      <Wrapper onClick={() => setIsOpen(!isOpen)}>
        <Input placeholder={placeholder} $isErrors={isErrors} readOnly value={active?.label} />
        <ImgIcon src={icon.src} $isOpen={isOpen} />
      </Wrapper>
      <Message text={message} messageErrors={messageErrors} />
    </Shell>
  );
};

export default SelectInput;

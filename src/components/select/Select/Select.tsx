import { useState } from "react";
import SelectInput from "../SelectInput/SelectInput";
import SelectOptions from "../SelectOptions/SelectOptions";
import { Wrapper } from "./styled";

interface SelectProps {
  placeholder?: string;
  label?: string;
  message?: string;
  items: {
    label: string;
    value: string;
  }[];
  value: string;
}

const Select = ({ items, placeholder, label, message, value }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      {isOpen && <SelectOptions items={items} value={value} />}
      <SelectInput placeholder={placeholder} label={label} message={message} setIsOpen={setIsOpen} isOpen={isOpen} />
    </Wrapper>
  );
};

export default Select;

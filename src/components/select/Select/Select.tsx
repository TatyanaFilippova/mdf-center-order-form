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
  onChange: (value: string) => void;
  value: string;
 
}

const Select = ({
  items,
  placeholder,
  label,
  message,
  value,
  onChange,
  
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Wrapper>
      {isOpen && (
        <SelectOptions
          items={items}
          value={value}
          onChange={onChange}
          setIsVisible={setIsOpen}
        />
      )}
      <SelectInput
        placeholder={placeholder}
        label={label}
        message={message}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        items={items}
        value={value}
      />
   
    </Wrapper>
  );
};

export default Select;

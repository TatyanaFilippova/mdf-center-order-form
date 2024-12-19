import { Input } from "./styled";

interface InputEntranceProps {
  type?: string;
  placeholder?: string;
  isErrors?: boolean;
}

const InputEntrance = ({
  type,
  placeholder,
  isErrors,
  ...props
}: InputEntranceProps) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      {...props}
      $isErrors={isErrors}
    />
  );
};

export default InputEntrance;

import { Wrapper, Label, ImgIcon } from "./styled";
import icon from "../assets/Check.svg";


interface SelectOptionsProps {
  items: {
    label: string;
    value: string;
  }[];
  value?: string;
  onChange: (value: string) => void;
  setIsVisible: (value: boolean) => void;
}

const SelectOptions = ({ items, value, onChange, setIsVisible }: SelectOptionsProps) => {
 
  return (
    <Wrapper>
      {items.map((item) => {
        const isActive = item.value === value;
        return (
          <Label
            key={item.value}
            onClick={() => {
              onChange(item.value);
              setIsVisible(false)
            }}
          >
            {item.label}
            {isActive && <ImgIcon src={icon.src} />}
          </Label>
        );
      })}
    </Wrapper>
  );
};

export default SelectOptions;

import { Wrapper, Label, ImgIcon} from "./styled";
import icon from "../assets/Check.svg";

interface SelectOptionsProps {
  items: {
    label: string;
    value: string;
  }[];
  value?: string;
}

const SelectOptions = ({ items, value }: SelectOptionsProps) => {
  return (
    <Wrapper>
      {items.map((item) => {
        const isActive = item.value === value;
        return (
          <Label key={item.value}>
            {item.label}
            {isActive && <ImgIcon src={icon.src} />}
          </Label>
        );
      })}
    </Wrapper>
  );
};

export default SelectOptions;

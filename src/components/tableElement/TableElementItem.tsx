import {
  Wrapper,
  ShellNumber,
  ShellTitle,
  ShellSizes,
  ShellRadius,
  ShellColorType,
  ShellDateStart,
  ShellDateEnd,
  ImgStatus,
  ShellStatus,
} from "./styled";
import menu from "./assets/Menu Vertical.svg";
import Status from "./status/Status";

interface TableElementItemProps {
  number: string;
  title: string;
  sizes: string;
  radius: string;
  colorType: string;
  color: string;
  dateStart: string;
  dateEnd: string;
  status: "todo" | "inProgress" | "expired" | "ready";
}

const TableElementItem = ({
  number,
  title,
  sizes,
  radius,
  colorType,
  color,
  dateStart,
  dateEnd,
  status,
}: TableElementItemProps) => {
  return (
    <Wrapper>
      <ShellNumber>{number}</ShellNumber>
      <ShellTitle>{title}</ShellTitle>
      <ShellSizes>{sizes}</ShellSizes>
      <ShellRadius>{radius}</ShellRadius>
      <ShellColorType>
        {colorType}, {color}
      </ShellColorType>

      <ShellDateStart> {dateStart}</ShellDateStart>
      <ShellDateEnd>{dateEnd}</ShellDateEnd>
      <ShellStatus>
        <Status $status={status} />
      </ShellStatus>
      <ImgStatus src={menu.src} />
    </Wrapper>
  );
};

export default TableElementItem;

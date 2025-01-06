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
import { useState } from "react";
import TableItemMenu from "../tableItemMenu/TableItemMenu";

export interface TableElementItemProps {
  number: string;
  title: string;
  sizes: string;
  radius: string;
  colorType: string;
  count: string;
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
  count,
}: TableElementItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <ShellNumber>{number}</ShellNumber>
      <ShellTitle>{title}</ShellTitle>
      <ShellSizes>
        {sizes} ({count})
      </ShellSizes>
      <ShellRadius>{radius}</ShellRadius>
      <ShellColorType>
        {colorType}, {color}
      </ShellColorType>

      <ShellDateStart> {dateStart}</ShellDateStart>
      <ShellDateEnd>{dateEnd}</ShellDateEnd>
      <ShellStatus>
        <Status $status={status} />
        <ImgStatus src={menu.src} onClick={() => setIsOpen(!isOpen)} />
      </ShellStatus>
      {isOpen && <TableItemMenu />}
    </Wrapper>
  );
};

export default TableElementItem;

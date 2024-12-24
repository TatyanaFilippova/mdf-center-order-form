import { Img } from "./styled";

interface HeaderItemProps {
  icon: string;
}

const HeaderItem = ({ icon }: HeaderItemProps) => {
  return (
    <>
      <Img src={icon} />
    </>
  );
};

export default HeaderItem;

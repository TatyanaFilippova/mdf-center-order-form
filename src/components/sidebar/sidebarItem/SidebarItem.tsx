import { Wrapper, Img } from "./styled";

interface SidebarItemProps {
  icon: string;
  text: string;
}

const SidebarItem = ({ icon, text }: SidebarItemProps) => {
  return (
    <Wrapper>
      <Img src={icon} />
      {text}
    </Wrapper>
  );
};

export default SidebarItem;

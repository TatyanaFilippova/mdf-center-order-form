import SidebarItem from "./sidebarItem/SidebarItem";
import { SidebarStyled, Title, Wrapper } from "./styled";
import Home from "./assets/Home.svg";
import Checkbook from "./assets/Checkbook.svg";
import MenuBook from "./assets/MenuBook.svg";
import QuestionAnswer from "./assets/QuestionAnswer.svg";
import ViewList from "./assets/ViewList.svg";
import Settings from "./assets/Settings.svg";

const Sidebar = () => {
  return (
    <>
      <SidebarStyled>
        <Title>Фасады Сысолы</Title>
        <Wrapper>
          <SidebarItem icon={Home.src} text="Главная" />
          <SidebarItem icon={Checkbook.src} text="Новый заказ" />
          <SidebarItem icon={MenuBook.src} text="Каталог" />
          <SidebarItem icon={ViewList.src} text="Мои заказы" />
          <SidebarItem icon={QuestionAnswer.src} text="Обращения" />
        </Wrapper>
        <SidebarItem icon={Settings.src} text="Настройки" />
      </SidebarStyled>
    </>
  );
};

export default Sidebar;

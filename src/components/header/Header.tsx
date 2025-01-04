import {
  HeaderStyled,
  Title,
  Wrapper,
  HeaderBottom,
  BreadCrumbsItem,
} from "./styled";
import localPost from "./assets/LocalPost.svg";
import person from "./assets/Person.svg";
import notifications from "./assets/Notifications.svg";
import HeaderItem from "./HeaderItem";

import HeaderUser from "../headerUser/HeaderUser";

interface HeaderProps {
  
  title: string;
  breadCrumbs: {
    title: string;
  }[];
}

const Header = ({ breadCrumbs, title }: HeaderProps) => {
  return (
    <>
      <HeaderStyled>
        <Title>{title}</Title>
        <Wrapper>
          <HeaderItem icon={notifications.src} />
          <HeaderItem icon={localPost.src} />
          <HeaderItem icon={person.src} />
          <HeaderUser name="Игорь Красников"/>
        </Wrapper>
      </HeaderStyled>
      <HeaderBottom>
        {breadCrumbs.map((item, key) => {
          return (
            <BreadCrumbsItem key={item.title}>
              {key > 0 && " / "}
              {item.title}
            </BreadCrumbsItem>
          );
        })}
      </HeaderBottom>
    </>
  );
};

export default Header;

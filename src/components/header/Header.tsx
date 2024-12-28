import {
  HeaderStyled,
  Title,
  Wrapper,
  Name,
  ImgVector,
  HeaderBottom,
  BreadCrumbsItem,
} from "./styled";
import localPost from "./assets/LocalPost.svg";
import person from "./assets/Person.svg";
import notifications from "./assets/Notifications.svg";
import HeaderItem from "./HeaderItem";
import vector from "./assets/Vector.svg";

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
          <Name>Игорь Красников</Name>
          <ImgVector src={vector.src} />
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

import {
  ButtonCard,
  ImgButton,
  NumberOrders,
  Shell,
  Title,
  Wrapper,
} from "./styled";
import iconButtonCard from "./assets/Vector.svg";

interface HomeCardProps {
  numberOrders: string;
  title: string;
}

const HomeCard = ({ numberOrders, title }: HomeCardProps) => {
  return (
    <Wrapper>
      <NumberOrders>{numberOrders}</NumberOrders>
      <Title>{title}</Title>
      <ButtonCard>
        Перейти <ImgButton src={iconButtonCard.src} />
      </ButtonCard>
    </Wrapper>
  );
};

export default HomeCard;

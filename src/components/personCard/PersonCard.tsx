import { ImgIcon, Title, Text, Wrapper } from "./styled";
import icon from "./assets/Person.svg";

const PersonCard = () => {
  return (
    <Wrapper>
      <ImgIcon src={icon.src} />
      <div>
        <Title>Игорь Красников</Title>
        <Text>Генеральный директор предприятия</Text>
      </div>
    </Wrapper>
  );
};

export default PersonCard;

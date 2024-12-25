import {
  ShellColorType,
  ShellDateEnd,
  ShellDateStart,
  ShellNumber,
  ShellRadius,
  ShellSizes,
  ShellStatus,
  ShellTitle,
  Wrapper,
} from "./styled";

const HeaderTable = () => {
  return (
    <Wrapper>
      <ShellNumber>#</ShellNumber>
      <ShellTitle>Название</ShellTitle>
      <ShellSizes>Размеры(количесвто)</ShellSizes>
      <ShellRadius>Радиус</ShellRadius>
      <ShellColorType>Тип, цвет</ShellColorType>

      <ShellDateStart>Дата приемки</ShellDateStart>
      <ShellDateEnd>Дата готовности</ShellDateEnd>
      <ShellStatus>Статус</ShellStatus>
    </Wrapper>
  );
};

export default HeaderTable;

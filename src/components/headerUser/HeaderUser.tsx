import { ImgVector, Name, Wrapper } from "./styled";
import vector from "./assets/Vector.svg";
import { useState } from "react";
import HeaderProfile from "../headerProfile/HeaderProfile";

interface HeaderUserPropse {
  name: string;
}

const HeaderUser = ({ name }: HeaderUserPropse) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Name>{name}</Name>
      <ImgVector $isOpen={isOpen} src={vector.src} />
      {isOpen === true && <HeaderProfile />}
    </Wrapper>
  );
};

export default HeaderUser;

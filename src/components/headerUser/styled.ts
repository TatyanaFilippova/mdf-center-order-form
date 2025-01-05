import styled from "styled-components";

interface ImgProps {
  $isOpen: boolean;
}

export const Name = styled.div`
  font-size: 13px;
  color: #3a3a3a;
  margin-right: 12px;
`;

export const ImgVector = styled.img<ImgProps>`
  width: 8px;
  height: 6px;

  transform: ${({ $isOpen }) => $isOpen && "rotate(180deg)"};
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

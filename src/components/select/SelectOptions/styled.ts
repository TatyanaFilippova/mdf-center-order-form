import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 0;
  box-shadow: 0px 4px 4px 0px #00000040;
  position: absolute;
  margin-top: 60px;
  background-color: white;
  overflow: hidden;
  z-index: 10;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  padding-top: 16px;
  padding-left: 16px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #9d9a9a;
  cursor: pointer;

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const ImgIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

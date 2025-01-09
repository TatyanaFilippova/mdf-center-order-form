import styled from "styled-components";

export const Wrapper = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 8px 12px 8px 12px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  padding-top: 16px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #9d9a9a;

  &:last-child {
    border: none;
  }
`;

export const ImgIcon = styled.img`
  width: 24px;
  height: 24px;
`;


import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  width: 100%;
  height: 48px;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-left: 8px;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const ShellNumber = styled.div`
  width: 3%;
  font-size: 12px;
  font-weight: 700;
`;

export const ShellTitle = styled.div`
  width: 22%;
  font-size: 12px;
  font-weight: 700;
`;

export const ShellSizes = styled.div`
  width: 15%;
  font-size: 12px;
`;

export const ShellRadius = styled.div`
  width: 10%;
  font-size: 12px;
`;

export const ShellColorType = styled.div`
  width: 20%;
  font-size: 12px;
`;

export const ShellDateEnd = styled.div`
  width: 10%;
  font-size: 12px;
`;

export const ShellDateStart = styled.div`
  width: 10%;
  font-size: 12px;
`;

export const ShellStatus = styled.div`
  width: 10%;
  font-size: 12px;
  text-align: end;
`;

export const ImgStatus = styled.img`
  width: 16px;
  height: 16px;
`;

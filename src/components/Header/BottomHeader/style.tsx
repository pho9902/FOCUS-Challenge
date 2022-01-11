import styled from "styled-components";

export const Wrap = styled.div`
  /* position: relative; */
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(239 239 239) 0px -1px 0px inset;
`;

export const Nav = styled.div`
  -webkit-box-pack: start;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  max-width: 1176px;
  margin: 0px auto;
  padding: 0px 32px;
  background-color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  box-shadow: rgb(239 239 239) 0px -1px 0px inset;
  overflow: auto;
`;

export const BoldBtn = styled.button`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0px 28px 0px 0px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: bold;
  padding: 8px 0px 20px;
  white-space: nowrap;
  cursor: pointer;
  color: rgb(26, 26, 26);
  &:hover {
    ::after {
      content: "";
      background-color: rgb(26, 26, 26);
      position: absolute;
      bottom: 10px;
      left: 0px;
      width: 100%;
      height: 2px;
      z-index: 999;
    }
  }
`;

export const OtherBtn = styled.button`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0px 28px 0px 0px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: 400;
  padding: 8px 0px 20px;
  white-space: nowrap;
  cursor: pointer;
  color: rgb(26, 26, 26);
  &:hover {
    font-weight: bold;
    ::after {
      content: "";
      background-color: rgb(26, 26, 26);
      position: absolute;
      bottom: 10px;
      left: 0px;
      width: 100%;
      height: 2px;
      z-index: 999;
    }
  }
`;

export const RightDiv = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;

export const Contour = styled.div`
  min-height: 30px;
  width: 1px;
  background-color: rgb(248, 248, 248);
  margin-bottom: 12px;
  margin-right: 30px;
`;

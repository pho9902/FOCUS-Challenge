import styled from "styled-components";
import { SearchIcon, ControlGroup } from "@class101/ui";

export const Main = styled.div`
  width: 100%;
  h4 {
    white-space: nowrap;
    margin: 0;
    font-size: 1.25em;
    cursor: pointer;
  }
`;

export const Landing = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
  max-width: 1176px;
`;

export const Logo = styled.h4`
  font-size: 1.5em;
`;

export const ClassStore = styled.div`
  display: flex;
  margin-left: 28px;
  h4:nth-of-type(1) {
    color: #ff5600;
    margin-right: 16px;
  }
  h4:nth-of-type(2) {
    margin-right: 36px;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
  width: 100%;
  padding-right: 52px;
  /* padding: 12px 52px 12px 16px; */
  background: rgb(248, 248, 249);
  border: 1px solid rgb(248, 248, 249);
  box-sizing: border-box;
  border-radius: 24px;
  text-align: left;
  color: rgb(26, 26, 26);
  &:focus {
    outline: none;
  }
`;

export const Form = styled(ControlGroup)`
  background: rgb(248, 248, 249);
  padding: 10px;
  border: 1px solid rgb(248, 248, 249);
  box-sizing: border-box;
  border-radius: 24px;
  display: flex;
  align-items: center;
  width: 420px;
  height: 46px;
`;

export const SearchBtn = styled.button`
  border: none;
  outline: none;
  padding: 0px;
  background-color: transparent;
  right: 16px;
  cursor: pointer;
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`;

export const RightA = styled.a`
  position: relative;
  white-space: nowrap;
  color: inherit;
  text-decoration: none;
`;

export const RightDiv = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
  margin-right: 24px;
  min-width: 72px;
`;

export const LoginDiv = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

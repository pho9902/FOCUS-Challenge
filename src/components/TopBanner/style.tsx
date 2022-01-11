import styled from "styled-components";
import { CloseIcon } from "@class101/ui";

export const Wrap = styled.div`
  width: 100%;
  height: 44px;
  background-color: rgb(236, 71, 0);
  z-index: 2000;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: relative;
  padding: 8px 0px;
  max-width: 1176px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Span = styled.span`
  color: white;
`;

export const Close = styled(CloseIcon)`
  border: none;
  display: inline-flex;
  flex: 0 0 auto;
  vertical-align: middle;
  padding: 3.5px;
  border-radius: 3px;
  background-color: transparent;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    background-color: #b2502b;
  }
`;

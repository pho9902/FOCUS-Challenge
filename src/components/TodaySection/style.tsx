import styled from "styled-components";

export const Wrap = styled.div`
  margin-left: 32px;
  margin-right: 32px;
`;

export const Section = styled.div`
  margin: 0;
  margin-top: 70px;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
`;

export const Block = styled.div`
  display: block;
`;

export const Header = styled.div`
  margin-bottom: 16px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-end;
`;

export const A = styled.a`
  cursor: pointer;
  &:visited {
    color: black;
    text-decoration: none;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: rgb(26, 26, 26);
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
`;

export const AllClass = styled.a`
  cursor: pointer;
  margin-left: 24px;
  font-weight: bold;
  color: rgb(162, 162, 162);
`;

export const ItemContainer = styled.div`
  margin: 24px 0px 0px;
`;

export const Swiper = styled.div`
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0px;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  transition-property: transform, -webkit-transform;
  box-sizing: content-box;
`;

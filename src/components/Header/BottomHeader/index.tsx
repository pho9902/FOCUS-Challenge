import { Wrap, Nav, BoldBtn, OtherBtn, RightDiv, Contour } from "./style";
import { DropDownIcon } from "@class101/ui";
export default function BottomHeader() {
  const routing = () => {
    window.location.href = String(process.env.REACT_APP_URL);
  };

  return (
    <Wrap>
      <Nav>
        <BoldBtn>
          {/* 툴팁 */}
          전체 카테고리
          <DropDownIcon />
        </BoldBtn>
        <BoldBtn onClick={() => routing()}>1월 가입혜택</BoldBtn>
        <BoldBtn onClick={() => routing()}>이벤트</BoldBtn>
        <BoldBtn onClick={() => routing()}>바로수강</BoldBtn>
        <BoldBtn onClick={() => routing()}>신규 클래스</BoldBtn>
        <BoldBtn onClick={() => routing()}>오픈 예정</BoldBtn>
        <Contour />
        <RightDiv>
          <OtherBtn onClick={() => routing()}>시그니처</OtherBtn>
          <OtherBtn onClick={() => routing()}>키즈</OtherBtn>
          <OtherBtn onClick={() => routing()}>원포인트 클래스</OtherBtn>
        </RightDiv>
      </Nav>
    </Wrap>
  );
}

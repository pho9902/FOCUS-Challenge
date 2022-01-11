import { Container, Span, Wrap, Close } from "./style";

export default function TopBanner() {
  return (
    <Wrap>
      <Container>
        <Span>지금 가입하고 원하는 클래스 1개 무료 체험하기</Span>
        <Close>X</Close>
      </Container>
    </Wrap>
  );
}

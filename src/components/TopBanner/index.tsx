import { Container, Span, Wrap, Close, WrapClose } from "./style";

interface Props {
  setIsOpen: Function;
}
export default function TopBanner({ setIsOpen }: Props) {
  return (
    <Wrap
      onClick={() => (window.location.href = String(process.env.REACT_APP_URL))}
    >
      <Container>
        <Span>지금 가입하고 원하는 클래스 1개 무료 체험하기{">"}</Span>
        <WrapClose
          onClick={e => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <Close fillColor="white" />
        </WrapClose>
      </Container>
    </Wrap>
  );
}

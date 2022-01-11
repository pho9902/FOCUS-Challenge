import { time_deal } from "../../apis/time_deal";
import {
  Wrap,
  Section,
  Block,
  Header,
  SectionTitle,
  A,
  AllClass,
  ItemContainer,
  Swiper,
} from "./style";

export default function TodaySection() {
  const routing = () => {
    window.location.href = String(process.env.REACT_APP_URL);
  };

  return (
    <Wrap>
      <Section>
        <Block>
          <Header>
            <A onClick={() => routing()}>
              <SectionTitle>오늘의 특가! TIME DEAL</SectionTitle>
            </A>
            <AllClass onClick={() => routing()}>전체 클래스 보기</AllClass>
          </Header>
          <ItemContainer>
            <Swiper>아이템</Swiper>
          </ItemContainer>
        </Block>
      </Section>
    </Wrap>
  );
}

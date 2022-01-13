import { useState } from "react";
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

  const data = time_deal.map((data, idx) => {
    return (
      <div key={idx}>
        <div>
          <img src={data.img} alt="thumbnail" />
          <span>{data.coupon}만원 쿠폰</span>
        </div>

        <span>{data.creator}</span>
        <span>{data.title}</span>
        <div>
          <span>하트 {data.like}</span>
          <span>엄지 {data.thumsUp}</span>
        </div>
        <div>
          <span>
            {Math.floor(
              ((data.price.originalPrice - data.price.salePrice) /
                data.price.originalPrice) *
                100
            )}
            %
          </span>
          <span>월 {data.price.salePrice / data.price.installment}원</span>
          <span>({data.price.installment}개월)</span>
        </div>
      </div>
    );
  });

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
            <Swiper>{data}</Swiper>
          </ItemContainer>
        </Block>
      </Section>
    </Wrap>
  );
}

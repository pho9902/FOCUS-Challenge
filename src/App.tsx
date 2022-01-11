import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import { useState } from "react";
import Carousel from "./components/Carousel";
import TodaySection from "./components/TodaySection";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div>
      {isOpen && <TopBanner setIsOpen={setIsOpen} />}
      <Header />
      <Carousel />
      {/* 캐러셀밑 배너 */}
      <TodaySection />
      {/* MD 추천 클래스 */}
      {/* 진행중인 인기 이벤트 */}
      {/* 오픈 예정 클래스 */}
      {/* 반응형까지 다하면 캐러셀 autoplay, 썸네일 이미지에 animation */}
      {/* 위에꺼 다하면 카테고리, 검색 툴팁 */}
    </div>
  );
}

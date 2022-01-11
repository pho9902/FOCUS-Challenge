import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div>
      {isOpen && <TopBanner setIsOpen={setIsOpen} />}
      <Header />
      {/* 캐러셀 */}
      {/* 캐러셀밑 배너 */}
      {/* 오늘의특가 섹션 */}
      {/* MD 추천 클래스 */}
      {/* 진행중인 인기 이벤트 */}
      {/* 오픈 예정 클래스 */}
      {/* 반응형까지 다하면 캐러셀 autoplay, 썸네일 이미지에 animation */}
      {/* 위에꺼 다하면 카테고리, 검색 툴팁 */}
    </div>
  );
}

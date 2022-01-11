import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div>
      {isOpen && <TopBanner setIsOpen={setIsOpen} />}
      <Header />
    </div>
  );
}

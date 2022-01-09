import styles from "styles/Header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={styles.main}>
        <div className={styles.landing}>
          <span>logo</span>
          <div>
            <a>클래스</a>
            <div>spacediv</div>
            <a>스토어</a>
          </div>

          <div className={styles.search}>
            <div>
              <div>
                <p>검색어 입력</p>
              </div>
              <span>돋보기svg</span>
            </div>
          </div>

          <div>
            <div>
              <a>크리에이터지원</a>
            </div>
            <div>
              <a>기업교육</a>
            </div>
            <div>
              <a>로그인</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import styles from "styles/Header.module.scss";

export default function Header() {
  return (
    <header>
      <div className={styles.main}>
        <div className={styles.landing}>
          <h4 className={styles.logo}>CLASS101</h4>
          <div className={styles.classStore}>
            <h4>클래스</h4>
            <h4>스토어</h4>
          </div>

          <div className={styles.search}>
            <div>
              <div>
                <input
                  className={styles.input}
                  placeholder="찾으시는 취미가 있으신가요?"
                />
              </div>
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

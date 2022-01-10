import styles from "styles/TopBanner.module.scss";

export default function TopBanner() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.span}>
          지금 가입하고 원하는 클래스 1개 무료 체험하기
        </div>
        <span className={styles.closeBtn}>X</span>
      </div>
    </div>
  );
}

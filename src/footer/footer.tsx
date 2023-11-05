import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer_wrap}>
      <h2>더 많은 정보</h2>
      <ul>
        <li>
          <span>GITHUB:http://asf.com</span>
          <span>GITHUB:http://asf.com</span>
        </li>
      </ul>
      <p>여기까지 스크롤해 주셔서 감사합니다!!</p>
    </footer>
  );
}

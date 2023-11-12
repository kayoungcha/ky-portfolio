import { scroll } from "../home-slider/home-slider";
import styles from "./home-skill.module.scss";

export default function HomeSkill(scroll: scroll) {
  //세로 방향 스크롤 위치
  let scrollY: number = scroll.scroll;
  //--

  return (
    <div className={styles.skill_wrap}>
      <h2 className={styles.b_title}>사용 가능 기술</h2>
      <ul className={styles.skill_list}>
        <li
          className={styles.icon_box}
          style={{
            transform: `matrix(1, 0, 0, 1, 0, ${Math.max(
              Math.min((6800 - scrollY) * 0.05, 120),
              0
            )})`,
          }}
        >
          <img src={"images/html-icon.png"} alt="html icon" />
          <div className={styles.wave_wrap}>
            <div className={styles.wave_one}>HTML</div>
            <div className={styles.wave_tow}>90% 사용가능</div>
          </div>
        </li>
        <li
          className={styles.icon_box}
          style={{
            transform: `matrix(1, 0, 0, 1, 0, ${Math.max(
              Math.min((6800 - scrollY) * 0.03, 120),
              -50
            )})`,
          }}
        >
          <img src={"images/css-icon.png"} alt="css icon" />
          <div className={styles.wave_wrap}>
            <div className={styles.wave_one}>CSS</div>
            <div className={styles.wave_tow}>90% 사용가능</div>
          </div>
        </li>
        <li
          className={styles.icon_box}
          style={{
            transform: `matrix(1, 0, 0, 1, 0, ${Math.max(
              Math.min((6800 - scrollY) * 0.03, 120),
              -20
            )})`,
          }}
        >
          <img src={"images/js-icon.png"} alt="javascript icon" />
          <div className={styles.wave_wrap}>
            <div className={styles.wave_one}>JAVASCRIPT</div>
            <div className={styles.wave_tow}>75% 사용가능</div>
          </div>
        </li>
        <li
          className={styles.icon_box}
          style={{
            transform: `matrix(1, 0, 0, 1, 0, ${Math.max(
              Math.min((6800 - scrollY) * 0.05, 120),
              -30
            )})`,
          }}
        >
          <img src={"images/ts-icon.png"} alt="typescript icon" />
          <div className={styles.wave_wrap}>
            <div className={styles.wave_one}>TYPESCRIPT</div>
            <div className={styles.wave_tow}>75% 사용가능</div>
          </div>
        </li>
        <li
          className={styles.icon_box}
          style={{
            transform: `matrix(1, 0, 0, 1, 0, ${Math.max(
              Math.min((6800 - scrollY) * 0.03, 120),
              -80
            )})`,
          }}
        >
          <img src={"images/ionic-icon.png"} alt="ionic icon" />
          <div className={styles.wave_wrap}>
            <div className={styles.wave_one}>ionic</div>
            <div className={styles.wave_tow}>70% 사용가능</div>
          </div>
        </li>
        <li
          className={styles.icon_box}
          style={{
            transform: `matrix(1, 0, 0, 1, 0, ${Math.max(
              Math.min((6800 - scrollY) * 0.03, 120),
              -60
            )})`,
          }}
        >
          <img src={"images/scss-icon.png"} alt="scss icon" />
          <div className={styles.wave_wrap}>
            <div className={styles.wave_one}>SCSS</div>
            <div className={styles.wave_tow}>80% 사용가능</div>
          </div>
        </li>
        <li
          className={styles.icon_box}
          style={{
            transform: `matrix(1, 0, 0, 1, 0, ${Math.max(
              Math.min((6800 - scrollY) * 0.05, 120),
              -50
            )})`,
          }}
        >
          <img src={"images/firebase-icon.png"} alt="fieebase icon" />
          <div className={styles.wave_wrap}>
            <div className={styles.wave_one}>FIREBASE</div>
            <div className={styles.wave_tow}>60% 사용가능</div>
          </div>
        </li>
        <li
          className={styles.icon_box}
          style={{
            transform: `matrix(1, 0, 0, 1, 0, ${Math.max(
              Math.min((6800 - scrollY) * 0.05, 120),
              -50
            )})`,
          }}
        >
          <img src={"images/nextjs-icon.png"} alt="nextjs icon" />
          <div className={styles.wave_wrap}>
            <div className={styles.wave_one}>NEXT.JS</div>
            <div className={styles.wave_tow}>40% 사용가능</div>
          </div>
        </li>
        <li
          className={styles.icon_box}
          style={{
            transform: `matrix(1, 0, 0, 1, 0, ${Math.max(
              Math.min((6800 - scrollY) * 0.05, 120),
              -100
            )})`,
          }}
        >
          <img src={"images/react-icon.png"} alt="react icon" />
          <div className={styles.wave_wrap}>
            <div className={styles.wave_one}>REACT</div>
            <div className={styles.wave_tow}>40% 사용가능</div>
          </div>
        </li>
        <li
          className={styles.icon_box}
          style={{
            transform: `matrix(1, 0, 0, 1, 0, ${Math.max(
              Math.min((6800 - scrollY) * 0.05, 120),
              -50
            )})`,
          }}
        >
          <img src={"images/angular-icon-b.png"} alt="angular icon" />
          <div className={styles.wave_wrap}>
            <div className={styles.wave_one}>ANGULAR</div>
            <div className={styles.wave_tow}>65% 사용가능</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

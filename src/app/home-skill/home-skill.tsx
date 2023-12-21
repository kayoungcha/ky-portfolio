import { scroll } from "../home-slider/home-slider";
import styles from "./home-skill.module.scss";
import Image from "next/image";

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
          <Image
            placeholder="blur"
            src={"images/html-icon.png"}
            alt="html icon"
            width={136}
            height={136}
            blurDataURL={"images/html-icon.png"}
          />
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
          <Image
            placeholder="blur"
            src={"images/css-icon.png"}
            blurDataURL={"images/css-icon.png"}
            alt="css icon"
            width={163}
            height={163}
          />
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
          <Image
            placeholder="blur"
            src={"images/js-icon.png"}
            blurDataURL={"images/js-icon.png"}
            alt="javascript icon"
            width={116}
            height={116}
          />
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
          <Image
            placeholder="blur"
            src={"images/ts-icon.png"}
            blurDataURL={"images/ts-icon.png"}
            alt="typescript icon"
            width={138}
            height={138}
          />
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
          <Image
            placeholder="blur"
            src={"images/ionic-icon.png"}
            blurDataURL={"images/ionic-icon.png"}
            alt="ionic icon"
            width={127}
            height={127}
          />
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
          <Image
            placeholder="blur"
            src={"images/scss-icon.png"}
            blurDataURL={"images/scss-icon.png"}
            alt="scss icon"
            width={114}
            height={114}
          />
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
          <Image
            placeholder="blur"
            src={"images/firebase-icon.png"}
            blurDataURL={"images/firebase-icon.png"}
            alt="fieebase icon"
            width={122}
            height={122}
          />
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
          <Image
            placeholder="blur"
            src={"images/nextjs-icon.png"}
            blurDataURL={"images/nextjs-icon.png"}
            alt="nextjs icon"
            width={102}
            height={102}
          />
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
          <Image
            placeholder="blur"
            src={"images/react-icon.png"}
            blurDataURL={"images/react-icon.png"}
            alt="react icon"
            width={120}
            height={120}
          />
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
          <Image
            placeholder="blur"
            src={"images/angular-icon-b.png"}
            blurDataURL={"images/angular-icon-b.png"}
            alt="angular icon"
            width={143}
            height={143}
          />
          <div className={styles.wave_wrap}>
            <div className={styles.wave_one}>ANGULAR</div>
            <div className={styles.wave_tow}>65% 사용가능</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

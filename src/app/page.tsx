"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll } from "../../hooks/useScroll";
import Header from "./header/header";
import HoneAppPp from "./home-app-pp/home-app-pp";
import HomeSkill from "./home-skill/home-skill";
import HomeSlider from "./home-slider/home-slider";
import HomeWebPp from "./home-web-pp/home-web-pp";
import styles from "../app/page.module.scss";
import Image from "next/image";

export default function Home() {
  //새로고침시 스크롤 top 으로 이동
  const resetWindowScrollPosition = useCallback(
    () => window.scrollTo(0, 0),
    []
  );

  useEffect(() => {
    window.onbeforeunload = function () {
      resetWindowScrollPosition();
    };
  }, [resetWindowScrollPosition]);

  //상단 프로필 텍스트 애니메이션
  function textAni() {
    const text1: string = "새로운 도전은 매번 설레입니다.";
    const text2: string = "<br />";
    const text3: string = "프론트엔드 개발자";
    const text4: string = "myName";
    const text7: string = "입니다.";

    const textArr: Array<string> = [
      ...Array.from(text1),
      text2,
      ...Array.from(text3),
      text4,
      ...Array.from(text7),
    ];

    const nameIndex = textArr.indexOf("myName");

    return textArr.map((text, i) => {
      if (text == "<br />") {
        return <br key={i} />;
      } else if (text == "myName") {
        return (
          <strong
            key={i}
            style={{ animationDelay: `${3.5 + Number(i * 0.1)}s` }}
          >
            &nbsp;&ldquo;차가영&rdquo;&nbsp;
          </strong>
        );
      } else {
        return (
          <span
            key={i}
            style={{
              animationDelay:
                i < nameIndex
                  ? `${3.5 + Number(i * 0.1)}s`
                  : `${4 + Number(i * 0.1)}s`,
            }}
          >
            {text}
          </span>
        );
      }
    });
  }

  //세로 스크롤값 받아오기
  const { scrollY } = useScroll();

  //header active이벤트
  const [profilePosition, setProfilePostion] = useState(false);
  const [portfolioPosition, setPortfolioPostion] = useState(false);
  const [skillPosition, setSkillPostion] = useState(false);
  const [FooterPosition, setFooterPostion] = useState(false);

  const refList = useRef<Array<HTMLDivElement | HTMLElement | null>>([]);

  useEffect(() => {
    if (!refList.current) return;

    refList.current.forEach((ele: any, i) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (i == 0) {
              setProfilePostion(entry.isIntersecting);
            }
            if (i == 1) {
              setPortfolioPostion(entry.isIntersecting);
            }
            if (i == 2) {
              setSkillPostion(entry.isIntersecting);
            }
            if (i == 3) {
              setFooterPostion(entry.isIntersecting);
            }
          });
        },
        { threshold: i == 0 ? 0 : 0.1 }
      );
      observer.observe(ele);
    });
  }, [scrollY]);

  //header move 이벤트
  function movePage(i: number) {
    const ele = refList.current[i];
    if (!ele) return;

    if (i == 0) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  }

  //--

  return (
    <>
      <Header
        scroll={scrollY}
        profileView={profilePosition}
        portfolioView={portfolioPosition}
        skillView={skillPosition}
        footerView={FooterPosition}
        movePage={movePage}
      />

      <main className={styles.wrap}>
        {/* 소개  */}
        <div
          className={styles.profile_wrap}
          style={{
            backgroundColor: `rgb(15 0 28 / ${Math.min(
              -250 - -scrollY,
              100
            )}%)`,
          }}
          ref={(el) => (refList.current[0] = el)}
        >
          <section
            className={[
              styles.profile_box,
              scrollY > 400 ? styles.scroll_over : "",
            ].join(" ")}
          >
            <h2>소개</h2>

            <div className={styles.info_box}>
              <div className={styles.text_area}>
                <p className={styles.top_text}>
                  <span className={styles.txt1}>시작은 퍼블리셔</span>
                  <span className={styles.txt2}>목표는 풀스텍 개발자</span>
                </p>
                <p className={styles.top_text}>
                  <span className={styles.txt3}>노력형 개발자</span>
                  <span className={styles.txt4}>앱 / 웹 에이전시 경력 3년</span>
                </p>

                <p className={styles.info_main_text}>{textAni()}</p>
              </div>
            </div>
          </section>
        </div>

        {/* 포트폴리오 */}
        <div
          className={styles.pp_wrap}
          style={
            !skillPosition
              ? {
                  backgroundColor: `rgb(15 0 28 / ${Math.min(
                    -250 - -scrollY,
                    100
                  )}%)`,
                }
              : {
                  backgroundColor: `rgb(15 0 28 / ${Math.max(
                    (refList.current[2]?.offsetTop || 0) - 600 - scrollY,
                    9
                  )}%)`,
                }
          }
          ref={(el) => (refList.current[1] = el)}
        >
          <section className={styles.publishing_box}>
            <HomeSlider scroll={scrollY} />
          </section>
          <section>
            <HoneAppPp scroll={scrollY} />
          </section>

          <section>
            <HomeWebPp scroll={scrollY} />
          </section>
        </div>
        <section
          className={styles.skill_wrap}
          ref={(el) => (refList.current[2] = el)}
        >
          <HomeSkill scroll={scrollY} />
        </section>
      </main>
      {/* 스킬 */}
      <div ref={(el) => (refList.current[3] = el)}></div>
    </>
  );
}

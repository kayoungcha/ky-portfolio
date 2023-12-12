"use client";

import { useEffect, useState } from "react";
import styles from "./more-page.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { readDoc } from "../../../hooks/useFirebaseDb";
import { publishingDb } from "../home-slider/home-slider";
import { DocumentData } from "firebase/firestore";

export default function More() {
  const [urlParams, setUrlParams] = useState("");
  const [appData, setAppData] = useState<DocumentData | publishingDb>({});
  const swiper = useSwiper();
  useEffect(() => {
    const newParams = location.search.split("=");
    readDoc("app", "param", urlParams).then(
      (data: Array<DocumentData | publishingDb>) => {
        setAppData(data[0]);
      }
    );
    setUrlParams(newParams[1]);

    if (newParams && appData && appData.detailImg) {
      swiper.update();

      console.log({ swiper });
    }
  }, [urlParams]);

  const [hideNotice, setNotice] = useState(false);

  const handleClick = () => {
    if (!hideNotice) {
      setNotice(true);
    }
  };

  return (
    <div className={styles.page_wrap}>
      <div className={styles.temporary_header}>
        <Link href="/">
          <Image
            src="/images/home-icon.png"
            alt="홈 icon"
            width={32}
            height={32}
          />
        </Link>
      </div>

      {appData && urlParams && (
        <main>
          <div className={styles.info_wrap}>
            <div className={styles.top_box}>
              <div className={styles.left_area}>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className={["mySwiper", styles.swiper].join(" ")}
                >
                  {appData.detailImg &&
                    appData.detailImg.map((img: string, index: number) => {
                      return (
                        <SwiperSlide
                          key={index}
                          className={styles["swiper-slide"]}
                        >
                          <Image
                            src={img}
                            width={200}
                            height={433}
                            alt={appData.title + "예시화면" + index + 1}
                          ></Image>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
              <section className={styles.right_area}>
                <h2
                  style={{
                    color: appData.mainColor || "#000",
                  }}
                >
                  BLOSSOM
                </h2>
                <div className={styles.info_box}>
                  <p className={styles.info}>{appData.detailContent}</p>
                  <p>참여 범위: {appData.devScope}</p>
                  <p>작업 기간 : {appData.devPeriod}</p>
                </div>
                <div className={styles.felx_box}>
                  <article className={styles.dev_env}>
                    <h3>개발 환경</h3>
                    <ul>
                      {appData.devInfo &&
                        appData.devInfo.map((info: object, index: number) => {
                          const keyValue = Object.keys(info);
                          const infoValue = Object.values(info);

                          return (
                            <li key={index}>
                              {keyValue[0]}: {infoValue[0]}{" "}
                            </li>
                          );
                        })}
                    </ul>
                  </article>
                  <article className={styles.tool}>
                    <h3>개발 도구</h3>
                    <ul>
                      {appData.useTool &&
                        appData.useTool.map((tool: string) => {
                          return (
                            <li key={tool} className={tool}>
                              {tool}
                            </li>
                          );
                        })}
                    </ul>
                  </article>{" "}
                </div>
              </section>
            </div>
            <section className={styles.more_info}>
              <h2>자세히 보기</h2>
              <iframe src={appData.url}></iframe>

              <section
                className={styles.notice}
                style={hideNotice ? { display: "none" } : {}}
              >
                <p>
                  직접 작동해 볼 수 있는 카피 페이지입니다. <br />
                  어플 안에 내용은 모두 테스트 데이터로 실제 데이터와 다릅니다.{" "}
                  <br />
                  웹에서 작동하게 만든 사이트로 실제 어플 구동과는 차이가 있을
                  수 있습니다.
                  <br />
                </p>

                {/* <p>
                직접 확인이 가능한 카피 페이지입니다.
                <br />
                퍼블리싱 예시 페이지로 기능은 붙어있지 않습니다.
                <br />
                안에있는 모든 정보는 실제 앱과 다릅니다.
              </p> */}
                <button onClick={handleClick}>닫고 시작하기</button>
              </section>
            </section>
          </div>
        </main>
      )}
    </div>
  );
}

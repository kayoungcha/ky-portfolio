"use client";

import { useEffect, useState } from "react";
import styles from "./more-page.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules

export default function More() {
  const [urlParams, setUrlParams] = useState("");
  useEffect(() => {
    const newParams = location.search.split("=");
    setUrlParams(newParams[1]);
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
                <SwiperSlide className={styles["swiper-slide"]}>
                  <Image
                    src="/images/blossom-app1.jpg"
                    width={100}
                    height={216}
                    alt="블라썸 화면 예시 1"
                  ></Image>
                </SwiperSlide>
                <SwiperSlide className={styles["swiper-slide"]}>
                  {" "}
                  <Image
                    src="/images/blossom-app3.jpg"
                    width={100}
                    height={216}
                    alt="블라썸 화면 예시 2"
                  ></Image>
                </SwiperSlide>
                <SwiperSlide className={styles["swiper-slide"]}>
                  {" "}
                  <Image
                    src="/images/blossom-app4.jpg"
                    width={100}
                    height={216}
                    alt="블라썸 화면 예시 3"
                  ></Image>
                </SwiperSlide>
                <SwiperSlide className={styles["swiper-slide"]}>
                  {" "}
                  <Image
                    src="/images/blossom-app5.jpg"
                    width={100}
                    height={216}
                    alt="블라썸 화면 예시 4"
                  ></Image>
                </SwiperSlide>
              </Swiper>
            </div>
            <section className={styles.right_area}>
              <h2 style={{ color: "#fb6b8f" }}>BLOSSOM</h2>
              <p className={styles.info}>
                온라인 매칭부터 실제 만남까지 지원하는 이성 소개팅 서비스
              </p>
              <div className={styles.felx_box}>
                <article className={styles.i_did}>
                  <h3>참여 범위</h3>
                  <ul>
                    <li>퍼블리싱 참여</li>
                  </ul>
                  <p>작업 기간 : 2주</p>
                </article>

                <article className={styles.dev_env}>
                  <h3>개발 환경</h3>
                  <ul>
                    <li>node 12.11.1</li>

                    <li>angular 9.1.6</li>

                    <li>ionic 5.0.0</li>
                  </ul>
                </article>
              </div>
              <article className={styles.tool}>
                <h3>개발 도구</h3>
                <ul>
                  <li className="XD">XD</li>
                  <li className="ionic">Ionic</li>
                  <li className="angular">Angular</li>
                </ul>
              </article>
            </section>
          </div>
          <section className={styles.more_info}>
            <h2>자세히 보기</h2>
            <iframe
              src="https://anidar-test.web.app/login"
              frameBorder="0"
            ></iframe>

            <section
              className={styles.notice}
              style={hideNotice ? { display: "none" } : {}}
            >
              <p>
                직접 작동해 볼 수 있는 카피 페이지입니다. <br />
                어플 안에 내용은 모두 테스트 데이터로 실제 데이터와 다릅니다.{" "}
                <br />
                웹에서 작동하게 만든 사이트로 실제 어플 구동과는 차이가 있을 수
                있습니다.
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
    </div>
  );
}

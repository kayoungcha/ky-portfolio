"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./home-slider.module.scss";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { useReadDb } from "../../../hooks/useFirebaseDb";
import { DocumentData } from "firebase/firestore";
import { isIOS, isSafari } from "react-device-detect";
import Link from "next/link";

//DB 인터페이스
export interface publishingDb {
  id: number | null;
  title: string;
  titleImg: string;
  content: string;
  useTool: Array<string>;
  moreInfo: boolean;
  param?: string;
  url?: string;
  detailContent?: string;
  detailImg?: Array<string>;
  mainColor?: string;
  devScope?: string;
  devPeriod?: string;
  devInfo?: string;
  docId: string;
  platform?: string;
}

export interface scroll {
  scroll: number;
}

export default function HomeSlider(scroll: scroll) {
  //ios 디바이스 확인
  const [whatIs, setWhatIs] = useState(false);
  useEffect(() => {
    if (isIOS || isSafari) {
      setWhatIs(true);
    }
  }, [whatIs]);

  //가로 스크롤 값
  let scrollY: number = scroll.scroll;
  //DB
  const pbData: Array<DocumentData | publishingDb> = useReadDb("publishing");
  //슬라이드 prev / next 버튼
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  // card click 이벤트
  let [activeId, setActiveId] = useState<publishingDb["id"]>(null);
  const handleClick = (id: number | null) => {
    if (!whatIs) {
      activeId == id ? setActiveId(null) : setActiveId(id);
    }
  };
  //세로 스크롤 값이 슬리더 부분보다 크거나 acrive 아이디값이 없으면 카드 회전 이벤트 reset
  if (scrollY > 1300 && activeId !== null) {
    setActiveId(null);
  }

  //--

  return (
    <div
      className={[styles.swiper_wrap, scrollY > 1 ? styles.none_box : ""].join(
        " "
      )}
    >
      <h2>앱 퍼블리싱 포트폴리오</h2>
      <div className={styles.slide_area}>
        <Swiper
          navigation={{
            prevEl: prevRef.current!,
            nextEl: nextRef.current!,
          }}
          modules={[Navigation]}
          slidesPerView={1}
          breakpoints={{
            560: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            976: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          {pbData.map((data) => {
            return (
              <SwiperSlide
                key={data.id}
                className={[
                  styles.slide_card,
                  !whatIs ? styles.on_card_filp : styles.off_card_filp,
                ].join(" ")}
                onClick={() => handleClick(data.id)}
              >
                <div
                  className={[
                    styles.card_front,
                    activeId == data.id && styles.active_front,
                  ].join(" ")}
                >
                  <Image
                    src={data.titleImg}
                    blurDataURL={data.titleImg}
                    alt={data.title}
                    width={200}
                    height={433}
                    placeholder="blur"
                    className={styles.slide_img}
                  />
                </div>
                <div
                  className={[
                    styles.card_back,
                    activeId == data.id && styles.active_back,
                  ].join(" ")}
                >
                  <h4 className={styles.back_title}>{data.title}</h4>
                  <p>
                    {data.content}
                    {data.param && (
                      <span>
                        <Link
                          href={{
                            pathname: "morepub",
                            query: { id: data.param },
                          }}
                        >
                          화면 더보기
                        </Link>{" "}
                      </span>
                    )}
                  </p>
                  <h4 className={styles.tool_title}>사용 기술</h4>
                  <p className={styles.tool_area}>
                    {data.useTool.map((tool: string, index: number) => {
                      return <span key={index}>{tool}</span>;
                    })}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          className={styles.prev_btn}
          ref={prevRef}
          onClick={() => handleClick(null)}
        >
          이전으로
        </button>
        <button
          className={styles.next_btn}
          ref={nextRef}
          onClick={() => handleClick(null)}
        >
          다음으로
        </button>
      </div>
    </div>
  );
}

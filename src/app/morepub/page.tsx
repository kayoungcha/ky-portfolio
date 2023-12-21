"use client";

import { useEffect, useState } from "react";
import styles from "./morepub-page.module.scss";
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
  const [pubData, setPubData] = useState<DocumentData | publishingDb>({});
  const swiper = useSwiper();
  useEffect(() => {
    const newParams = location.search.split("=");
    readDoc("publishing", "param", urlParams).then(
      (data: Array<DocumentData | publishingDb>) => {
        console.log({ data });

        setPubData(data[0]);
      }
    );
    setUrlParams(newParams[1]);
  }, [urlParams]);

  return (
    <div className={styles.page_wrap}>
      <div className={styles.temporary_header}>
        <Link href="/">
          <Image
            src="../images/home-icon.png"
            alt="홈 icon"
            width={32}
            height={32}
          />
        </Link>
      </div>

      {pubData && urlParams && (
        <main>
          <div className={styles.info_wrap}>
            <div className={styles.top_box}>
              <div className={styles.left_area}>
                <Image
                  src={"../" + pubData.titleImg}
                  width={240}
                  height={520}
                  alt={pubData.title + "메인 사진"}
                  placeholder="blur"
                  blurDataURL={"../" + pubData.titleImg}
                />
              </div>
              <section className={styles.right_area}>
                <h2
                  style={{
                    color: pubData.mainColor || "#000",
                  }}
                >
                  {pubData.title}
                </h2>
                <div className={styles.info_box}>
                  <p className={styles.info}>{pubData.detailContent}</p>
                  <p>참여 범위: {pubData.devScope}</p>
                  <p>작업 기간 : {pubData.devPeriod}</p>
                </div>
                <div className={styles.felx_box}>
                  <article className={styles.tool}>
                    <h3>개발 도구</h3>
                    <ul>
                      {pubData.useTool &&
                        pubData.useTool.map((tool: string) => {
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
              <h2>화면 더보기</h2>

              <div className={styles.detail_image_wrap}>
                {pubData.detailImg &&
                  pubData.detailImg.map((img: string, index: number) => {
                    return (
                      <Image
                        key={index}
                        src={img}
                        width={260}
                        height={554}
                        alt={pubData.title + "상세 사진" + Number(index + 1)}
                        placeholder="blur"
                        blurDataURL={img}
                      />
                    );
                  })}
              </div>
            </section>
          </div>
        </main>
      )}
    </div>
  );
}

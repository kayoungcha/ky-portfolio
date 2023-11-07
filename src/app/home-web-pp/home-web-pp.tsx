"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./home-web-pp.module.scss";
import Image from "next/image";
import useFetch from "../../../hooks/useFetch";
import { scroll } from "../home-slider/home-slider";
import { useReadDb } from "../../../hooks/useFirebaseDb";
import { DocumentData } from "firebase/firestore";

export interface webDb {
  id: number | null;
  title: string;
  titleImg: string;
  content: string;
  useTool: Array<string>;
  url: string;
}

export default function HomeWebPp(scroll: scroll) {
  let scrollY: number = scroll.scroll;

  const webData: Array<DocumentData | webDb> = useReadDb("webDb");

  let [activeId, setActiveId] = useState<webDb["id"]>(null);
  const handleClick = (id: number | null) => {
    activeId == id ? setActiveId(null) : setActiveId(id);
  };

  //card 등장 이벤트
  const refList = useRef<Array<HTMLLIElement | null>>([]);
  const [activeCard, setActiveCard] = useState<any>({});
  useEffect(() => {
    if (!refList.current) return;

    for (let index = 0; index < refList.current.length; index++) {
      const element = refList.current[index];

      if (!element) break;

      const observer = new IntersectionObserver(
        (entries) => {
          let key = "set" + index;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCard((datas: any) => ({
                ...datas,
                [key]: entry.isIntersecting,
              }));
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(element);
    }

    return () => {
      if (
        activeCard["set" + Number(refList.current.length - 1)] &&
        scrollY < 1200
      ) {
        setActiveCard({});
      }
    };
  }, [scrollY]);

  return (
    <div className={styles.web_pp_wrap}>
      <h2>웹 포트폴리오 퍼블리싱 + 개발</h2>
      <ul>
        {webData.map((data, i) => {
          return (
            <li
              key={data.id}
              ref={(el) => (refList.current[i] = el)}
              className={activeCard["set" + i] ? styles.active : ""}
            >
              <div className={styles.ex_box}>
                <Image
                  src={data.titleImg}
                  alt="소개팅 앱 블라썸"
                  width={520}
                  height={295}
                  className={styles.web_img}
                />

                <article>
                  <h3>{data.title}</h3>
                  <span className={styles.icon_img_wrap}>
                    <img src={"images/angular-icon.png"} alt="angular icon" />
                  </span>
                  {data.url && data.url !== "" && (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(data.id);
                      }}
                    >
                      자세히 보기
                    </a>
                  )}
                </article>
              </div>

              <div
                className={styles.fream_wrap}
                style={
                  activeId == data.id
                    ? {
                        width: "100%",
                        height: "70vh",
                        opacity: 1,
                        transition: "all ease-in 0.3s",
                      }
                    : {}
                }
              >
                <iframe src="http://localhost:3000/"></iframe>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

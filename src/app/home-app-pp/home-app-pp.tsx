"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./home-app-pp.module.scss";
import Image from "next/image";
import { publishingDb } from "../home-slider/home-slider";
import useFetch from "../../../hooks/useFetch";
import { scroll } from "../home-slider/home-slider";

export default function HoneAppPp(scroll: scroll) {
  let scrollY: number = scroll.scroll;
  //퍼블리싱 포트폴리오 데이터
  const pbData: Array<publishingDb> = useFetch("publishingDb");
  //li 호버 이벤트
  const [thisHovering, setIsHovering] = useState<publishingDb["id"]>(null);
  const handleMouseOver = (id: number | null) => {
    setIsHovering(id);
  };
  const handleMouseOut = () => {
    setIsHovering(null);
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
        { threshold: 0.3 }
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

  //--

  return (
    <div className={styles.app_pp_wrap}>
      <h2>앱 개발 포트폴리오</h2>
      <ul>
        {pbData.map((data, i) => {
          return (
            <li
              key={data.id}
              onMouseOver={() => handleMouseOver(data.id)}
              onMouseOut={handleMouseOut}
              ref={(el) => (refList.current[i] = el)}
              className={activeCard["set" + i] ? styles.active_card : ""}
            >
              <Image
                src={data.titleImg}
                alt={data.title}
                width={300}
                height={600}
              />
              <article
                className={[
                  styles.info_box,
                  thisHovering == data.id ? styles.active : "",
                ].join(" ")}
              >
                <h3>{data.title}</h3>
                <p>{data.content}</p>
                <span className={styles.icon_img_wrap}>
                  {data.useTool.map((tool, index) => {
                    return <span key={index}>{tool}</span>;
                  })}
                </span>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

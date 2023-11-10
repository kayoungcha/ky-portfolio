"use client";

import { useEffect, useState } from "react";
import styles from "./more-page.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function More() {
  const [urlParams, setUrlParams] = useState("");

  useEffect(() => {
    const newParams = location.search.split("=");
    setUrlParams(newParams[1]);
  }, [urlParams]);

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
        <div className="info_box">
          <div className="left_area"></div>
          <div className="right_area"></div>
        </div>
      </main>
    </div>
  );
}

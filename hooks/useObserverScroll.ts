"use client";
import { MutableRefObject, useEffect, useState } from "react";

export default function useObserverScroll(ref: any, threNum: Array<number>) {
  const domRef = ref.current;
  console.log({ domRef });

  const [isScroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    if (!domRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log({ entry });

          entry.isIntersecting ? setScroll(true) : setScroll(false);
        });
      },
      { threshold: threNum }
    );
    observer.observe(domRef);

    return () => observer.disconnect();
  }, []);

  return isScroll;
}

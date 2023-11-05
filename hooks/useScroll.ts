import { throttle } from "lodash";
import { useState, useEffect, useMemo } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState<number>(0);
  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        setScrollY(window.scrollY);
      }, 300),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [throttledScroll]);

  return {
    scrollY,
  };
}

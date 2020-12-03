import { useState, useEffect } from "react";

export function useScroll() {
  const [offset, setOffset] = useState()
  const [top, setTop] = useState()
  const [height, setHeight] = useState()

  const scrollHandler = e => {
    const { scrollTop, scrollHeight } = e.target.documentElement
    setOffset(window.innerHeight)
    setTop(scrollTop)
    setHeight(scrollHeight)
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return {
    offset,
    top,
    height
  };
}
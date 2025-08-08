import { useEffect, useRef, useState } from "react";

export const useHeightResponsive = <T extends HTMLElement>() => {
  const [height, setHeight] = useState(0);
  const ref = useRef<T>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };
    const observer = new ResizeObserver(updateWidth);
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { height, ref };
};

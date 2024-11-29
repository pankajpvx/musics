import { useRef } from "react";

export const useButtonDebounce = () => {
  const debounceRef = useRef(null);

  const onDebounce = (callback, time = 300) => {
    if (debounceRef.current) return;
    callback();
    debounceRef.current = setTimeout(() => {
      debounceRef.current = null;
    }, time);
  };

  return { onDebounce };
};

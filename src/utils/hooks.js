import  { useState, useEffect } from "react";
export const useDebounce = (value, wait) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, wait);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, wait]);
  return debounceValue;
};


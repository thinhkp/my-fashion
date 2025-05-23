import { useEffect, useState } from "react";

export default function useLocalstorage<T>(
  key: string,
  initValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initValue;
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initValue;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
}

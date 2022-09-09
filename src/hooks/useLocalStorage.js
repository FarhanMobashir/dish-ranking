import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : initialValue;
  };

  const [value, setValue] = useState(get());

  // subscribe to localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

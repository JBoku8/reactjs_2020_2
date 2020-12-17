import { useState, useEffect } from "react";

function useSessionStorage(key, defaultValue = "") {
  const [value, setValue] = useState(() => {
    return JSON.parse(sessionStorage.getItem(key)) || defaultValue;
  });
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useSessionStorage;

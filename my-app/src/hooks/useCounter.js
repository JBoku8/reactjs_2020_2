import { useState, useEffect } from "react";

function useCounter(defaultValue = 0) {
  const [count, setCount] = useState(defaultValue);
  useEffect(() => {
    document.title = `Counter - ${count}`;

    return () => {
      document.title = "React Application";
    };
  }, [count]);

  const increment = (value = 1) => setCount(count + value);
  const decrement = (value = 1) => setCount(count - value);

  return {
    count,
    increment,
    decrement,
  };
}

export default useCounter;

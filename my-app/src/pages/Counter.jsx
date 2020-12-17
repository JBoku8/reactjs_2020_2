import { useEffect } from "react";
import useCounter from "../hooks/useCounter";
import useLocalStorage from "../hooks/useLocalStorage";

function Counter(props) {
  const [storage, setStorage] = useLocalStorage("my-app:counter", 0);
  const { count, increment, decrement } = useCounter(storage);
  useEffect(() => {
    setStorage(count);
  }, [count, setStorage]);
  return (
    <div>
      <h2>Counter page</h2>
      <h4>Counter: {count}</h4>
      <br />
      <h4>Actions</h4>
      <button onClick={() => increment(10)}>Increment</button>
      <button onClick={() => decrement(10)}>Decrement</button>
    </div>
  );
}

export default Counter;

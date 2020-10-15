import React, { useState } from "react";
import Display from "./Display";

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Display count={count} />
      <button onClick={() => setCount(count + 1)}>Plus</button>
    </div>
  );
}

export default Counter;

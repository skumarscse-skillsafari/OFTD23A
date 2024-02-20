import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((current) => current + 1);
  }

  function decrement() {
    setCount((current) => current - 1);
  }

  function reset() {
    setCount(() => 0);
  }
  return (
    <div>
      <h2>Counter App</h2>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>{" "}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;

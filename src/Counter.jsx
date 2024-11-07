import { useState } from "react";

function Counter({ start = 0, change = 1, danger = false }) {
  console.log(danger);
  const [counter, setCounter] = useState(+start);
  const handleClick = (type) => {
    if (type === "minus") {
      setCounter(counter - change);
      return;
    }
    setCounter(counter + change);
  };
  return (
    <div className="flex items-center gap-4 border-2 border-black rounded-lg p-4">
      <button
        className={`btn ${danger ? "red" : ""}`}
        onClick={() => handleClick("minus")}
      >
        -
      </button>
      <p className="text-4xl font-bold ">{counter}</p>
      <button
        className={`btn ${danger ? "red" : ""}`}
        onClick={() => handleClick("plus")}
      >
        +
      </button>
    </div>
  );
}

export default Counter;

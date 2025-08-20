import { useEffect, useState } from "react";

function UseEffects() {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);
  useEffect(() => {
    if (value > 0) {
      console.log("Call useEffects");
      document.title = `Increment ${value}`;
    }
  }, [value,something]);
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click me</button>
      <button onClick={() => setSomething(something + 1)}>
        Something Click me
      </button>
    </div>
  );
}

export default UseEffects;

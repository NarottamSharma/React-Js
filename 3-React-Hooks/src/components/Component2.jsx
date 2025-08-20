import React from "react";

function Component2({ count, onClickHandler }) {
  const handleClick = () => onClickHandler();

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>Decrememt</button>
    </div>
  );
}

export default Component2;

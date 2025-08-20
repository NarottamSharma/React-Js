function Component1({ count, onClickHandler }) {
  const handleClick = () => onClickHandler();
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Component1;

import { useState } from "react";
import ArrayManipulation from "./components/ArrayManipulation";
import Counter from "./components/Counter";
import ChangingObject from "./components/ChangingObject";
import ArrayOfObjects from "./components/ArrayOfObjects";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import TodoList from "./components/TodoList";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import CopyInput from "./components/CopyInput";
import Switcher from "./components/Switcher";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <ArrayManipulation />; */}
      {/* <Counter/> */}
      {/* <ChangingObject/> */}
      {/* <ArrayOfObjects/> */}
      {/* <Component1 count={count} onClickHandler={() => setCount(count + 1)} /> */}
      {/* <Component2 count={count} onClickHandler={() => setCount(count + 1)} /> */}
      {/* <TodoList/> */}
      {/* < Profile/> */}
      {/* <ShoppingList/> */}
      {/* Portal Feature */}
      {/* <CopyInput/> */}
      <Switcher />
    </div>
  );
};

export default App;

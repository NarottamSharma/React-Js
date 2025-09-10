import { useState, FC, useContext, useReducer } from 'react'
// import { MyContext } from '../context/MyContext'
// Normal  Counteer Application
// const Counter = () => {
//   const [count, setCount] = useState<number>(0);
//   return (
//     <div>
//       <h1>Counter App</h1>
//       <p>Count:{count}</p>
//       <button onClick={()=>setCount(count+1)} >Increment</button>
//       <button onClick={()=>setCount(count-1)} >Decrement</button>
//     </div>
//   )
// }

// Use Context 
// const Counter: FC = () => {
//   const { count, increment, decrement } = useContext(MyContext)
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// }

// UseReducer
// interface State {
//   count: number;
// }
// type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' } | {type:'RESET'};
// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
// 	case 'INCREMENT':
// 	  return { count: state.count + 1 };
// 	case 'DECREMENT':
// 	  return { count: state.count - 1 };
// 	case 'RESET':
// 	  return { count: 0 };
// 	default:
// 	  return state;
//   }
// };
// const Counter: FC = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   return (
// 	<div>
// 	  <h1>Counter App</h1>
// 	  <p>Count: {state.count}</p>
// 	  <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
// 	  <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
// 	  <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
// 	</div>
//   );
// };

export default Counter
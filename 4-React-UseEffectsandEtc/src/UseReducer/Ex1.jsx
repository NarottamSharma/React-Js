import { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const Ex1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>
    <h1>Count :{state.count}</h1>
    <button onClick={()=>dispatch({type:"increment"})}>+</button>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
  </div>
};

export default Ex1;

/**
 * Counter component using useReducer hook for state management
 * 
 * This component demonstrates basic useReducer usage with increment, decrement, and reset functionality.
 * The state is managed through a reducer function that handles three action types:
 * - "increment": increases the count by 1
 * - "decrement": decreases the count by 1  
 * - "reset": resets the count back to initial value
 * 
 * @component
 * @returns {JSX.Element} A div containing:
 *   - h1 element displaying current count from state
 *   - Three buttons for increment (+), decrement (-), and reset operations
 * 
 * @requires useReducer hook from React
 * @requires reducer function to handle state transitions
 * @requires initialState object with count property
 * 
 * @example
 * // Usage:
 * <Ex1 />
 * 
 * @author Your Name
 * @since Version 1.0
 */
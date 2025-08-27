import React, { useReducer } from 'react'

type ActionType = {
  type?: "increase" | "decrease" | "random" | "reset";
  payload?: number;
}
const initalState = 10;
const reducer = (state: number, action: ActionType) => {
  console.log("state", state);
  console.log("action", action);
  
  switch(action.type){
    case "increase":
      return(state += 1);
    case "random":
      return action.payload ? action.payload : state;
    case "decrease":
      return(state -= 1);
    case "reset":
      return 0;
    default:
      return state;  
  }
}
export default function DemoUseRe() {
    // const [count, setCount] = useReducer<number>(0);

    const [count, dispatch] = useReducer(reducer, initalState);

    const handleIncrease = ():void => {
        // setCount((prev) => prev + 1);
        dispatch({type: "increase"})
    }
    const handleDecreae = (): void => {
        // setCount((prev) => prev - 1);
        dispatch({type: "decrease"})
    }

    const handleRandom = (): void => {
      dispatch({type: "random", payload: Math.ceil(Math.random() * 100)})
    }
    const handleReset = (): void => {
        // setCount((prev) => prev - 1);
        dispatch({type: "reset"})
    }
  return (
    <div>
      <h2>Count: {count}</h2>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecreae}>Decrese</button>
        <button onClick={handleRandom}>random</button>
        <button onClick={handleReset}>reset</button>
    </div>
    
  )
}

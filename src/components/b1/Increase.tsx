import React, { useReducer } from 'react'
const initialState = 0;
type ActionType = {
  type?: "increase";
}
const reducer = (state: number, action: ActionType) => {
  
  switch(action.type){
    case "increase":
      return(state += 1);
    default:
      return state;  
  }
}
export default function Increase() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const handleClick = (): void => {
        dispatch({type: "increase"})
    }
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={handleClick}>Increase</button>
    </div>
  )
}

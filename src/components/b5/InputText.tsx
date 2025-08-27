import React, { useReducer } from 'react'
type ActionType = {
    type?: string;
    value?: string;
}

const reducer = (state: number, action: ActionType) => {
    switch(action.type){
        case "Text":
            return action.value;
        default:
            return state;    
    }
}

export default function InputText() {
    const [text, dispatch] = useReducer(reducer, "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "Text", value: e.target.value});
    }
  return (
    <div>
        <h2>{text}</h2>
        <input onChange={handleChange} type="text" value={text} />
    </div>
  )
}

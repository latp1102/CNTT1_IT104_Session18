import React, { useReducer } from 'react'
type ActionType = {
    type?: string;
    value?: string;
}
const reducer = (state: string, action: ActionType) => {
    switch (action.type){
        case "SetGender":
            return action.value || state;
        default:
            return state;    
    }
}
export default function InputRadio() {
    const [gender, dispatch] = useReducer(reducer, "Nam");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "SetGender", value: e.target.value});
    }
  return (
    <div>
        <label>
            <input type="radio" name="gender"
            value="Nam"
            checked={gender === "Nam"} 
            onChange={handleChange}/>Nam
        </label>
        <br />
        <label>
            <input type="radio" name="gender" 
            value="Nữ"
            checked={gender === "Nữ"}
            onChange={handleChange}/>Nữ
        </label>
        <br />
        <label>
            <input type="radio" name="gender"
            value="Khác"
            checked= {gender === "khác"}
            onChange={handleChange}/>Khác
        </label>
        <br />
        <p>
            <b>Selected gender: </b> {gender}
        </p>
    </div>
  )
}

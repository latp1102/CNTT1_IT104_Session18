import React, { useContext } from 'react'
import { ThemeProvider } from '../../Context/ThemeContext';
import UseGlobal from '../../hooks/UseGlobal';

export default function GranChildren() {
    // const result = useContext(ThemeProvider);
    const {theme, handleChangeTime} = UseGlobal();

    console.log("result: ", result?.theme);
  return (
    <div>
        <h1>gra</h1>
        {/* <button onClick={result?.handleChangeTime}>
            Chế độ
        {result?.theme === "light" ? "sáng" : "tối"}</button> */}
        <button onClick={handleChangeTime}>
            Chế độ
        {theme === "light" ? "sáng" : "tối"}</button>
    </div>
  )
}

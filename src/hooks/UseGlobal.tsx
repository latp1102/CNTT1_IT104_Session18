import React, { useCallback, useContext } from 'react'
import { ThemeProvider } from '../Context/ThemeContext'
export default function UseGlobal() {
    const context = useContext(ThemeProvider);

    if(!context){
        throw new Error("Not value")
    }
    return context;
  return (
    <div>

    </div>
  )
}

import React, { useState } from 'react'
import Parent from '../components/demo/Parent';
import Children from '../components/demo/Children';

type ThemeContextType = {
    theme?: "light" | "dark";
    language: "vn" | "en";
    handleChangeTime: () => void;
}
export const ThemeProvider = React.createContext<ThemeContextType | null>(null);
type PropType = {
    children?: React.ReactNode;
}
export default function ThemeContext({children}: PropType) {
    const [theme, setTheme] = useState<"dark" | "light">("light");
    const [language, setLanguage] = useState<"vn" | "en">("en");

    // hàm cạp nhật chế độ sáng tối
    const handleChangeTime = (): void => {
        setTheme((prev) => prev === "light" ? "dark" : "light");
    }
  return (
    <ThemeProvider.Provider value={{theme, language, handleChangeTime}}>
        {children}
    </ThemeProvider.Provider>
  );
}

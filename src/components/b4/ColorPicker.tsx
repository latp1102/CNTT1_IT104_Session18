import React, { useCallback, useState } from 'react'

export default function ColorPicker() {
    const [color, setColor] = useState("");
    const handleColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }, []);
  return (
    <div>
        <h2>Màu người chọn: </h2>
        <input type="color" value={color} onChange={handleColor} />

        <h3>Mùa hiển thị: </h3>
        <div style={{
            width: "200px", height: "200px",
            border: "1px solid black",
            backgroundColor: color || "white",
        }}/>
    </div>
  )
}

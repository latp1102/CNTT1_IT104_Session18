import React, { useEffect, useReducer, useState } from 'react'

type Todo = {
    id: number;
    title: string;
}

type AddAction = {
    type: "ADD";
    payload: string;
}

const reducer = (state: Todo[], action: AddAction): Todo[] => {
  switch (action.type) {
    case "ADD":
      return !action.payload
        ? state
        : [...state, { id: Date.now(), title: action.payload }];

    default:
      return state;
  }
};
export default function Todo() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [input, setInput] = useState("");

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todos));
    }, [todos]);

    const handleAdd = () => {
        dispatch({type: "ADD", payload: input});
        setInput("");
    }
  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "8px",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "8px 16px",
          }}
        >
          Thêm
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "4px",
              marginBottom: "8px"
            }}
          >
            <span>{todo.title}</span>

            <button
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "6px 12px",
              }}>
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}


// import React from 'react'
// import GranChildren from './GranChildren'

// export default function Children() {
//   return (
//     <div>
//         <h1></h1>
//         <GranChildren/>
//     </div>
//   )
// }

// import React, { useReducer, useEffect, useState } from "react";

// type Todo = {
//   id: number;
//   title: string;
// };

// interface AddAction {
//   type: "ADD";
//   payload: string;
// }

// interface RemoveAction {
//   type: "REMOVE";
//   payload: number;
// }

// interface InitAction {
//   type: "INIT";
//   payload: Todo[];
// }

// type Action = AddAction | RemoveAction | InitAction;


// const reducer = (state: Todo[], action: Action): Todo[] => {
//   switch (action.type) {
//     case "INIT":
//       return action.payload;

//     case "ADD":
//       return !action.payload
//         ? state
//         : [...state, { id: Date.now(), title: action.payload }];

//     case "REMOVE":
//       return state.filter((todo) => todo.id !== action.payload);

//     default:
//       return state;
//   }
// };


// export default function TodoApp() {
//   const [todos, dispatch] = useReducer(reducer, []);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     const saved = localStorage.getItem("todos");
//     if (saved) {
//       dispatch({ type: "INIT", payload: JSON.parse(saved) });
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const handleAdd = () => {
//     dispatch({ type: "ADD", payload: input });
//     setInput("");
//   };

//   return (
//     <div style={{ width: "400px", margin: "20px auto", fontFamily: "sans-serif" }}>
//       <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
//         <input
//           type="text"
//           placeholder="Nhập tên công việc"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           style={{
//             flex: 1,
//             padding: "8px",
//             fontSize: "16px",
//             border: "1px solid #ccc",
//             borderRadius: "4px"
//           }}
//         />
//         <button
//           onClick={handleAdd}
//           style={{
//             backgroundColor: "#28a745",
//             color: "white",
//             border: "none",
//             padding: "8px 16px",
//             borderRadius: "4px",
//             cursor: "pointer"
//           }}
//         >
//           Thêm
//         </button>
//       </div>
//       <div>
//         {todos.map((todo) => (
//           <div
//             key={todo.id}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               padding: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "4px",
//               marginBottom: "8px"
//             }}
//           >
//             <span>{todo.title}</span>
//             <button
//               onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}
//               style={{
//                 backgroundColor: "#dc3545",
//                 color: "white",
//                 border: "none",
//                 padding: "6px 12px",
//                 borderRadius: "4px",
//                 cursor: "pointer"
//               }}
//             >
//               Xóa
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

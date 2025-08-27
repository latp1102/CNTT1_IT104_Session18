import React, { useMemo, useState } from 'react'
type UserList = {
    id?: number;
    name?: string;
    age?: number;
}
export default function UserList() {
    const [users] = useState([
        {id: 1, name: "A", age: 18},
        {id: 2, name: "B", age: 17},
        {id: 3, name: "C", age: 19},
        {id: 4, name: "D", age: 20},
        {id: 5, name: "E", age: 21}
    ]);
    const adults = useMemo(() => {
        return users.filter((user) => user.age > 18);
        
    }, [users])
  return (
    <div>
        <h2>Danh</h2>
        <ul>
            {adults.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} tuổi
                </li>
            ))}
        </ul>
    </div>
  )
}

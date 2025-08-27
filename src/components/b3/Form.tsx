import React, { useCallback, useState } from 'react'

export default function Form() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm((prev) => ({
            ...prev, [name]: value,
        }))
    }
    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
    })
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <br />
            <input type="emai" name="email" 
            value={form.email} onChange={handleChange}/>
            <br />
            <label>Password</label>
            <br />
            <input type="password" name="password" 
            value={form.password} onChange={handleChange}/>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

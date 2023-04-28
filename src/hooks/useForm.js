import { useState } from "react"
/**
 * Hook for form parameter
 * @param {object} initialState - initial data
 * @returns form - state, handleChange - function
 */
export default function useForm (initialState) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return {form, handleChange}
}

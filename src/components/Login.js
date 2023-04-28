import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login({ loginUser }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    // loginUser(user)
  }

  return (
    <div className={"authentication"}>
      <div className="authentication__container">
        <h2 className="authentication__title">Вход</h2>
        <form className="authentication__form" name='Login' onSubmit={handleSubmit}>
          <fieldset className="authentication__fieldset">
            <div className="authentication__field">
              <input
                id="email-input"
                className="authentication__input authentication__input_email"
                type="text"
                placeholder="Email"
                name="email"
                minLength="2"
                maxLength="40"
                value={user.name}
                onChange={handleChange}
                required />
            </div>
            <div className="authentication__field">
              <input
                id="password-input"
                className="authentication__input authentication__input_passward"
                type="password"
                placeholder="Пароль"
                name="password"
                minLength="2"
                maxLength="200"
                value={user.password}
                onChange={handleChange}
                required />
            </div>
            <button className="authentication__submit-button" type="submit" name="authenticationSubmit">Войти</button>
          </fieldset>
        </form>
      </div>
    </div >
  )
}

export default function Register(onSubmit) {
  return (
    <div className={"authentication"}>
      <div className="authentication__container">
        <h2 className="authentication__title">Регистрация</h2>
        <form className="authentication__form" name='Login' onSubmit={onSubmit}>
          <fieldset className="authentication__fieldset">
            <div className="authentication__field">
              <input
                id="email-input"
                className="authentication__input authentication__input_email"
                type="text"
                placeholder="Email"
                name="inputEmail"
                minLength="2"
                maxLength="40"
                // value={name}
                // onChange={handleNameChange}
                required />
            </div>
            <div className="authentication__field">
              <input
                id="passward-input"
                className="authentication__input authentication__input_passward"
                type="password"
                placeholder="Пароль"
                name="inputPassward"
                minLength="2"
                maxLength="200"
                // value={description}
                // onChange={handleDescriptionChange}
                required />
            </div>
            <button className="authentication__submit-button" type="submit" name="authenticationSubmit">Зарегистрироваться</button>
          </fieldset>
        </form>
        <button className="authentication__button-link" type="submit" name="authenticationSubmit">Уже зарегистрированы? Войти</button>
      </div>
    </div >
  )
}

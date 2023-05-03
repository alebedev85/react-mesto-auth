import logo from '../images/Logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header({ email, logOut, loggedIn }) {
  return (
    <header className="header">
      <a href="#"><img src={logo} className="header__logo" alt="Логотип Место" /></a>
      <nav className="header_menu">
        {loggedIn ?
          <>
          <NavLink to="mesto-react/" className={'header_link'}>Mesto</NavLink>
            <p className={'header_link header_text'}>{email}</p>
            <button type="button" className={'header_link header_button'} onClick={logOut}>Выйти</button>
          </> :
          <>
            <NavLink to="mesto-react/" className={'header_link'}>Mesto</NavLink>
            <NavLink to="mesto-react/sign-in" className={'header_link'}>Войти</NavLink>
            <NavLink to="mesto-react/sign-up" className={'header_link'}>Регистрация</NavLink>
          </>}
      </nav>
    </header>
  )
}

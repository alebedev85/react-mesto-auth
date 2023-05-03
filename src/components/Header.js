import logo from '../images/Logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header({email, logOut}) {
  return (
    <header className="header">
      <a href="#"><img src={logo} className="header__logo" alt="Логотип Место" /></a>
      <nav className="header_menu">
      <h2 className={'header_link'}>{email}</h2>
      <NavLink to="mesto-react/" className={'header_link'}>Mesto</NavLink>
      <NavLink to="mesto-react/sign-in" className={'header_link'}>Login</NavLink>
      <NavLink to="mesto-react/sign-up" className={'header_link'}>Register</NavLink>
      <button type="button" className={'header_link'} onClick={logOut}>Выйти</button>
      </nav>
    </header>
  )
}

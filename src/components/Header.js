import logo from '../images/Logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <a href="#"><img src={logo} className="header__logo" alt="Логотип Место" /></a>
      <nav className="header_menu">
      <NavLink to="mesto-react/" className={'header_link'}>Mesto</NavLink>
      <NavLink to="mesto-react/sign-in" className={'header_link'}>Login</NavLink>
      <NavLink to="mesto-react/sign-up" className={'header_link'}>Register</NavLink>
      </nav>
    </header>
  )
}

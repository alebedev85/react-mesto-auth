import logo from '../images/Logo.svg';

export default function Header() {
  return (
    <header className="header">
      <a href="#"><img src={logo} className="header__logo" alt="Логотип Место" /></a>
    </header>
  )
}
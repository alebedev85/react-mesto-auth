import { NavLink } from 'react-router-dom';
export default function NavBar({ email, logOut, loggedIn }){
  return (
    <nav className="navbar">
        {loggedIn ?
          <>
            <p className={'navbar__text'}>{email}</p>
            <button type="button" className={'navbar__link navbar__button'} onClick={logOut}>Выйти</button>
          </> :
          <>
            <NavLink to="/" className={'navbar__link'}>Mesto</NavLink>
            <NavLink to="/sign-in" className={'navbar__link'}>Войти</NavLink>
            <NavLink to="/sign-up" className={'navbar__link'}>Регистрация</NavLink>
          </>}
      </nav>
  )
}

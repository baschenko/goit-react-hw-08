import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={s.link} to="/">
        Головна
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.link} to="/contacts">
          Контакти
        </NavLink>
      )}
    </nav>
  );
}

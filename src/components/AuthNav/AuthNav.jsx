import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink className={s.link} to="/register">
        Зареєcтруватись
      </NavLink>
      <NavLink className={s.link} to="/login">
        Увійти
      </NavLink>
    </div>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import s from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import { IconButton, Tooltip } from '@mui/material';
import { MdExitToApp } from 'react-icons/md';

export default function UserMenu() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Вітаю, {user.name}</p>
      <Tooltip title="Вихід">
        <IconButton onClick={() => dispatch(logOut())}>
          <MdExitToApp />
        </IconButton>
      </Tooltip>
    </div>
  );
}

import { IoPersonSharp } from 'react-icons/io5';
import { MdPhone, MdDelete, MdEditNote } from 'react-icons/md';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { idInModal, openModal, openModalEdit } from '../../redux/modal/slice';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  // Обробляємо onClick і передеємо id для видалення у стейт
  const handleDelete = () => {
    dispatch(idInModal(id));
    dispatch(openModal());
  };

  // Обробляємо onClick і передеємо id для редагування
  const handleEdit = () => {
    dispatch(idInModal(id));
    dispatch(openModalEdit());
  };

  return (
    <Paper
      elevation={3}
      sx={theme => ({
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: '#fff',
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
      })}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <IoPersonSharp className={s.icon} size="22" />
                {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <MdPhone className={s.icon} size="22" />
                {number}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Tooltip title="Редагувати контакт">
              <IconButton aria-label="delete" onClick={handleEdit}>
                <MdEditNote size={24} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Видалити контакт">
              <IconButton aria-label="delete" onClick={handleDelete}>
                <MdDelete size={24} />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Contact;

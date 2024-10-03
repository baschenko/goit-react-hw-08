import { IoPersonSharp } from 'react-icons/io5';
import { MdPhone } from 'react-icons/md';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  // Обробляємо натисканя onClick і передеємо deleteContact
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={s.textBlock}>
        <p className={s.text}>
          <IoPersonSharp className={s.icon} size="22" />
          {name}
        </p>
        <p className={s.text}>
          <MdPhone className={s.icon} size="22" />
          {number}
        </p>
      </div>
      <button type="button" className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;

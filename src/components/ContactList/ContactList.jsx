import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/slice';

const ContactList = () => {
  // Викликаємо мемоізований масив в залежності від пошукового запрос або за ім'ям або за номером телефону
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

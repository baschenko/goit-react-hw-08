import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/slice';
import { Grid } from '@mui/material';

const ContactList = () => {
  // Викликаємо мемоізований масив в залежності від пошукового запрос або за ім'ям або за номером телефону
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <Grid container spacing={2} columns={16}>
        {filteredContacts.map(({ id, name, number }) => (
          <Grid item xs={8} key={id}>
            <Contact name={name} number={number} id={id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ContactList;

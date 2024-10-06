import s from './ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import EditModal from '../../components/EditModal/EditModal';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import { selectModal, selectModalEdit } from '../../redux/modal/selectors';

export default function ContactsPages() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isConfirmModal = useSelector(selectModal);
  const isEditModal = useSelector(selectModalEdit);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Книга контактів</h1>
      <ContactForm />
      {!contacts.length ? (
        <p>Додайте Ваш перший контакт</p>
      ) : (
        <>
          <SearchBox />
          <ContactList />
          {isConfirmModal && <ConfirmModal />}
          {isEditModal && <EditModal />}
        </>
      )}
    </div>
  );
}

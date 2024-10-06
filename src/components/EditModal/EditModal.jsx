import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { IconButton, Tooltip } from '@mui/material';
import { MdAddCircle } from 'react-icons/md';
import s from './EditModal.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { selectIdInModal, selectModalEdit } from '../../redux/modal/selectors';
import { selectContacts } from '../../redux/contacts/selectors';
import { closeModalEdit } from '../../redux/modal/slice';
import { editContact } from '../../redux/contacts/operations';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: { backgroundColor: 'rgba(0,0,0,0.4)' },
};

Modal.setAppElement('#root');

const EditModal = () => {
  const dispatch = useDispatch();

  const isModalEditOpen = useSelector(selectModalEdit);
  const idInModal = useSelector(selectIdInModal);
  const users = useSelector(selectContacts);
  const { id, name, number } = users.find(user => user.id === idInModal);

  // Налаштовуємо Валідацію
  const registerShema = Yup.object({
    name: Yup.string()
      .required("Це поле є обов'язковим")
      .min(3, 'Тре більше літер')
      .max(50, 'Полегше, поле не гумове!'),
    number: Yup.string()
      .required("Це поле є обов'язковим")
      .min(3, 'Тре більше чисел')
      .max(16, 'Шось це вже не схоже на номер телефону!'),
  });

  // Значенна полів форми по замовчуванню
  const initialValues = {
    name: name,
    number: number,
  };

  const handleCloseModal = () => {
    dispatch(closeModalEdit());
  };

  // Обробляємо форму при Submit відправляємо editContact

  const handleSubmit = (date, actions) => {
    dispatch(editContact({ id, date }));
    dispatch(closeModalEdit());
    actions.resetForm();
  };

  return (
    <Modal
      isOpen={isModalEditOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 className={s.title}>Введіть нове ім`я або телефон </h2>
      <Formik
        validationSchema={registerShema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className={s.label}>
            <span>Ім`я</span>
            <Field name="name" className={s.input} />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Номер</span>
            <Field name="number" className={s.input} />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>

          <Tooltip title="Додати контакт">
            <IconButton type="submit">
              <MdAddCircle size={48} color="rgb(25, 118, 210)" />
            </IconButton>
          </Tooltip>
        </Form>
      </Formik>
    </Modal>
  );
};

export default EditModal;

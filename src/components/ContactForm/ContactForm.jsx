import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { IconButton, Paper, Tooltip } from '@mui/material';
import { MdAddCircle } from 'react-icons/md';

const ContactForm = () => {
  const dispatch = useDispatch();

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
    id: '',
    name: '',
    number: '',
  };

  // Обробляємо форму при Submit відправляємо addContact

  const handleSubmit = (date, actions) => {
    dispatch(addContact(date));
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={registerShema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Paper
        elevation={3}
        sx={theme => ({
          p: 2,
          marginRight: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: '#fff',
          ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
          }),
        })}
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
      </Paper>
    </Formik>
  );
};

export default ContactForm;

import { Formik, Form, Field } from 'formik';
import s from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Button } from '@mui/material';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={s.form} autoComplete="off">
        <label className={s.label}>
          Ім`я
          <Field type="text" name="name" />
        </label>
        <label className={s.label}>
          Пошта
          <Field type="email" name="email" />
        </label>
        <label className={s.label}>
          Пароль
          <Field type="password" name="password" />
        </label>
        <Button variant="contained" type="submit">
          Зареєструватись
        </Button>
      </Form>
    </Formik>
  );
}

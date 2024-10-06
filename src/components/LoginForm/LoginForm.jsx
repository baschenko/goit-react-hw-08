import { Formik, Form, Field } from 'formik';
import s from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { selectIsLoading } from '../../redux/auth/selectors';
import { Button } from '@mui/material';

export default function LoginForm() {
  const dispath = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    dispath(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={s.form} autoComplete="off">
        <label className={s.label}>
          Пошта
          <Field type="email" name="email" />
        </label>
        <label className={s.label}>
          Пароль
          <Field type="password" name="password" />
        </label>
        <Button variant="contained" type="submit" disabled={isLoading}>
          Увійти
        </Button>
      </Form>
    </Formik>
  );
}

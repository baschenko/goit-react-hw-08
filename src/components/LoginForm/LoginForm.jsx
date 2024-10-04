import { Formik, Form, Field } from 'formik';
import s from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { selectIsLoading } from '../../redux/auth/selectors';

export default function LoginForm() {
  const dispath = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    console.log(values);
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
          Email
          <Field type="email" name="email" />
        </label>
        <label className={s.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit" disabled={isLoading}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}

import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        dispatch(login(values));
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <label>
          Email
          <Field type="email" name="email" required />
        </label>
        <label>
          Password
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
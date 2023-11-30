import React from 'react';
import { Formik, useFormik } from 'formik';

const FormikLogin = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div>
      <Formik initialValues={formik.initialValues} onSubmit={formik.onSubmit}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            value={formik.values.username}
            onChange={formik.handleChange}
          />

          <label htmlFor='password'>Password</label>

          <input
            type='password'
            id='password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          <button type='submit'>Login</button>
        </form>
      </Formik>
    </div>
  );
};

export default FormikLogin;

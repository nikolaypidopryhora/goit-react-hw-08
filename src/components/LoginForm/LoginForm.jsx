import { Form, Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import { useId } from "react";

import css from "./LoginForm.module.css";
import { loginUser } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailField = useId();
  const passwordField = useId();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter a valid email").required("Email required"),
    password: Yup.string()
      .min(4, "At least 4 characters")
      .max(12, "No more than 12 characters")
      .required("Password required"),
  });

  function submitHandler(values, actions) {
    dispatch(loginUser({ email: values.email, password: values.password }));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      <Form className={css.loginForm}>
        <div className={css.field}>
          <label htmlFor={emailField}>Email</label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id={emailField}
            required
          />
          <ErrorMessage name="email" component="span" />
        </div>
        <div className={css.field}>
          <label htmlFor={passwordField}>Password</label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={passwordField}
            required
          />
          <ErrorMessage name="password" component="span" />
        </div>
        <button className={css.button} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}

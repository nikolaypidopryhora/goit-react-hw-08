import { Form, Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import * as Yup from "yup";

import { registerUser } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short")
      .max(15, "Name is too long")
      .required("Name required"),
    email: Yup.string().email("Not email").required("Email required"),
    password: Yup.string()
      .min(4, "At least 4 characters")
      .max(12, "No more than 12 characters")
      .required("Password required"),
  });

  function submitHandler(values, actions) {
    dispatch(
      registerUser({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <Form className={css.registrationForm}>
          <label className={css.field}>
            Name:
            <Field className={css.input} type="text" name="name" />
          </label>
          <ErrorMessage className={css.error} name="name" component="span" />
          <label className={css.field}>
            Email:
            <Field className={css.input} type="email" name="email" />
          </label>
          <ErrorMessage className={css.error} name="email" component="span" />
          <label className={css.field}>
            Password:
            <Field className={css.input} type="password" name="password" />
          </label>
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
}

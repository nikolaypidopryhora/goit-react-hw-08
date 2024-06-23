import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  phone: "",
};

const FormSchema = Yup.object({
  name: Yup.string().min(3, "Too short!").required("Name required!"),
  phone: Yup.string()
    .matches(
      "^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$",
      "Wrong phone number. Example: 999-255-2525"
    )
    .required("Phone number required!"),
});

export default function ContactForm() {
  const nameField = useId();
  const numberField = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(
      addContact({
        name: values.name,
        phone: values.phone,
      })
    );
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <div className={css.field}>
          <label htmlFor={nameField}>Name</label>
          <Field className={css.input} type="text" name="name" id={nameField} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.field}>
          <label htmlFor={numberField}>Phone</label>
          <Field
            className={css.input}
            type="text"
            name="phone"
            id={numberField}
          />
          <ErrorMessage name="phone" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

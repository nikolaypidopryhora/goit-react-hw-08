import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import { selectError } from "../../redux/contacts/selectors";

const initialValues = {
  name: "",
  number: "",
};

const FormSchema = Yup.object({
  name: Yup.string().min(3, "Too short!").required("Name required!"),
  number: Yup.string()
    .matches(
      "^[0-9]{3}[-][0-9]{2}[-][0-9]{2}$",
      "Wrong phone number. Example: 999-25-25"
    )
    .required("Phone number required!"),
});

export default function ContactForm() {
  const nameField = useId();
  const numberField = useId();
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = (values, action) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    if (!error) {
      toast.success("Success", {
        duration: 4000,
        position: "top-center",
      });
    }
    action.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={css.field}>
            <label htmlFor={nameField}>Name</label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameField}
            />
            <ErrorMessage name="name" component="span" />
          </div>

          <div className={css.field}>
            <label htmlFor={numberField}>Number</label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={numberField}
            />
            <ErrorMessage name="number" component="span" />
          </div>

          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
      <Toaster position="top-center" duration="5000" />
    </>
  );
}

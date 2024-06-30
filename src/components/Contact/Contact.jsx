import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import toast, { Toaster } from "react-hot-toast";
import { selectError } from "../../redux/contacts/selectors";

export default function Contact({ id, name, number }) {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    confirmAlert({
      title: "Confirm action",
      message: "Are you sure you want to delete this contact?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(deleteContact(id));
            if (!error) {
              toast.success("Success", {
                duration: 4000,
                position: "top-center",
              });
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <div className={css.listItem}>
      <div>
        <div className={css.dataLine}>
          <BsFillPersonFill />
          <p>{name}</p>
        </div>
        <div className={css.dataLine}>
          <BsFillTelephoneFill />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} type="button" onClick={deleteHandler}>
        Delete
      </button>
      <Toaster position="top-center" duration="5000" />
    </div>
  );
}

import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, phone }) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteContact(id));
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
          <p>{phone}</p>
        </div>
      </div>
      <button className={css.deleteBtn} type="button" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
}

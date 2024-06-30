import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.listEl}>
      {visibleContacts.map((item) => (
        <li className={css.listItem} key={item.id}>
          <Contact id={item.id} name={item.name} number={item.number} />
        </li>
      ))}
    </ul>
  );
}

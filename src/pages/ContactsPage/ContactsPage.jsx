import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import ContactList from "../../components/ContactList/ContactList";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

const styles = {
  container: {
    width: "768px",
  },
};

export default function ContactPage() {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
    <div style={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {!error && loading ? <Loader /> : <ContactList />}
    </div>
  );
}

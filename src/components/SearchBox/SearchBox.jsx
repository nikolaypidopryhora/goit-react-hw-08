import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const text = useSelector(selectNameFilter);
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <label htmlFor="searchBox">Find contacts</label>
      <input
        className={css.searchInput}
        type="text"
        value={text}
        id="searchBox"
        onChange={handleChange}
      />
    </div>
  );
}

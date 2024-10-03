import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  // Обробляємо значення пошукового поля і передеємо changeFilter у стор фільрів
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name or phone</p>
      <input
        type="text"
        onChange={handleChange}
        value={filter}
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;

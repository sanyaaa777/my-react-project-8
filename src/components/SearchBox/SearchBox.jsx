import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  return (
    <input
      type="text"
      placeholder="Пошук"
      value={filter}
      onChange={e => dispatch(setNameFilter(e.target.value))}
    />
  );
}

import PropTypes from 'prop-types';
import { Input } from '../ui/Input.styled';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'store/slice';

export const Filter = ({ onChange }) => {
  const filter = useSelector(getFilterValue);

  return (
    <label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { Input } from '../ui/Input.styled';
import { useSelector } from 'react-redux';

export const Filter = ({ onChange }) => {
  const filter = useSelector(state => state.filter);

  return (
    <label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

// export const Filter = ({ value, onChange }) =>  (
//     <label>
//       Find contacts by name
//       <Input type="text" value={value} onChange={onChange} />
//     </label>
//   );

Filter.propTypes = {
  // value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

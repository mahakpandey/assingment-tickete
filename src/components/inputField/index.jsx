import PropTypes from 'prop-types';

const InputField = ({ type, placeholder }) => {
  return (
    <div className="input-div">
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default InputField;

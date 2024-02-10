import PropTypes from "prop-types";

const DropDownField = ({ option }) => {
  return (
    <div className="input-div">
      <select name="" id="" >
        <option value="">{option}</option>
      </select>
    </div>
  );
};

DropDownField.propTypes = {
  option: PropTypes.string.isRequired,
};
export default DropDownField;

import React from "react";
import PropTypes from "prop-types";
const Input = ({ id, ...props }) => {
  return (
    <div>
      <input
        id="floatingInput"
        {...props}
      />
    </div>
  );
};

// Input.defaultProps = {
//   label: "silahkan isi form ini",
// };

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  name: "name",
  type: "text"
};
export default Input;

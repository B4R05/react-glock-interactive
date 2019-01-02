import React from "react";
import PropTypes from "prop-types";

const Modes = ({ toggle }) => {
  return (
    <span onClick={toggle}>
      <input type="radio" name="glock" value="semi" defaultChecked />
      <label>Semi</label>
      <input type="radio" name="glock" value="auto" />
      <label>Auto</label>
    </span>
  );
};

Modes.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default Modes;

import React from "react";
import PropTypes from "prop-types";

const UpperParts = ({ slider }) => {
  return (
    <React.Fragment>
      <img
        src="assets/barrel copy.png"
        alt="glockbarrel"
        className="barrel"
        height="100"
      />
      <img
        src="assets/slider.png"
        alt="glockslider"
        width="623"
        height="154"
        className={slider}
      />
    </React.Fragment>
  );
};

UpperParts.propTypes = {
  slider: PropTypes.string.isRequired
};

export default UpperParts;

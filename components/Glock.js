import React from "react";
import UpperParts from "./UpperParts";
import BottomParts from "./BottomParts";
import PropTypes from "prop-types";

const Glock = ({ slider, trigger, magazine, ejectbutton }) => {
  return (
    <React.Fragment>
      <UpperParts slider={slider} />
      <BottomParts
        trigger={trigger}
        ejectbutton={ejectbutton}
        magazine={magazine}
      />
    </React.Fragment>
  );
};

Glock.propTypes = {
  slider: PropTypes.string.isRequired,
  trigger: PropTypes.string.isRequired,
  magazine: PropTypes.string.isRequired,
  ejectbutton: PropTypes.string.isRequired
};

export default Glock;

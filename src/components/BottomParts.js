import React from "react";
import PropTypes from "prop-types";

const BottomParts = ({ trigger, ejectbutton, magazine }) => {
  return (
    <React.Fragment>
      <img
        src="assets/bottom_no_mag_no_button.png"
        alt="glockhandle"
        width="679"
        className="bottom"
      />
      <img
        src="assets/trigger.png"
        alt="glocktrigger"
        width="70"
        height="70"
        className={trigger}
      />
      <img
        src="assets/eject_button.png"
        alt="ejectbutton"
        width="70"
        height="55"
        className={ejectbutton}
      />
      <img
        src="assets/magfull.png"
        alt="magazine"
        width="245"
        height="330"
        className={magazine}
      />
    </React.Fragment>
  );
};

BottomParts.propTypes = {
  trigger: PropTypes.string.isRequired,
  magazine: PropTypes.string.isRequired,
  ejectbutton: PropTypes.string.isRequired
};

export default BottomParts;

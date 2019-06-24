import React from "react";
import PropTypes from "prop-types";
import "./Container.css";
import classNames from "classnames";

const Container = props => {
  return (
    <div className={classNames("Container", props.className)}>
      {props.children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string
};

export default Container;

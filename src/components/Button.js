import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Button.css";

function btnClasses(props) {
  return classNames("Button", "Button_size_" + props.size, props.className);
}

const Button = props => {
  if (props.to) {
    return (
      <Link {...props} className={btnClasses(props)}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={btnClasses(props)} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string
};

Button.defaultProps = {
  size: "default"
};

export default Button;

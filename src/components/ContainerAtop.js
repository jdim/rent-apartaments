import React from "react";
import "./ContainerAtop.css";
import classNames from "classnames";

const ContainerAtop = props => {
  return (
    <div className={classNames("ContainerAtop", props.className)}>
      {props.children}
    </div>
  );
};

export default ContainerAtop;

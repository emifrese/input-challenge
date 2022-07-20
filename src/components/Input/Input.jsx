import React from "react";

import classes from "./Input.module.css";

const Input = ({
  variant,
  disabledShadow,
  disabled,
  toggle,
  startIcon,
  endIcon,
  size,
  color,
  iconName,
}) => {
  let classInput = classes.inputDefault;
  let style = {};
  let title = "<Input ";

  title += "/>";

  return (
    <div className={classes.inputContainer}>
      <p className={classes.inputTitle}>{title}</p>
      <label className={classes.inputLabel}>
        <p>Label</p>
        <input
          className={classInput}
          style={style}
          placeholder={"Placeholder"}
        />
      </label>
    </div>
  );
};

export default Input;

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
  iconName
}) => {
  let classInput = classes.inputDefault;
  let style = {};
  let title = '<Input '
 
  if (typeof variant !== "undefined" && variant !== "") {
    title += `variant="${variant}" `;
    switch (variant) {
      case "outline":
        classInput = classes.outlineInput;
        break;
      case "text":
        classInput = classes.textInput;
        break;
    }
  }

  if (disabledShadow) {
    title += 'disabledShadow '
    style.boxShadow = "none";
  }

  if (disabled) {
    title += 'disabled '
    style.color = "#9e9e9e";
    style.pointerEvents = 'none'
  }

  if (startIcon) {
    title += `startIcon=${iconName} `
    style.paddingRight = "16px";
  }

  if (endIcon) {
    title += `endIcon=${iconName} `
    style.paddingLeft = "16px";
  }

  if (typeof size !== "undefined" && size !== ""){
    title += `size="${size}" `
    switch (size) {
      case "sm":
        style.width = "73px";
        style.height = "32px";
        style.minWidth = "73px";
        style.minHeight = "32px";
        break;
      case "md":
        style.width = "81px";
        style.height = "36px";
        break;
      case "lg":
        style.width = "93px";
        style.height = "42px";
    }
  }

  if (typeof color !== "undefined" && color !== ""){
    title += `color="${color}" `
    switch (color) {
      case "primary":
        classInput = classes.primary;
        break;
      case "secondary":
        classInput = classes.secondary;
        break;
      case "danger":
        classInput = classes.danger;
        break;
    }
  }


  title += '/>'

  return (
    <div className={classes.inputContainer}>
      <p className={classes.inputTitle}>{title}</p>
      <button
        className={classInput}
        style={style}
        onClick={() => {
          if (!disabled) {
            toggle();
          }
        }}
      >
        {startIcon && <img src={startIcon} className={classes.startImg} />}
        Default
        {endIcon && <img src={endIcon} className={classes.endImg} />}
      </button>
    </div>
  );
};

export default Input;

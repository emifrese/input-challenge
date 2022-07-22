import React, { useState } from "react";

import classes from "./Input.module.css";

const Input = ({
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
  row,
}) => {
  const [enteredInput, setEnteredInput] = useState(value || "");
  let classInput = classes.inputDefault;
  let classLabel = classes.labelDefault;
  let classContainer = classes.inputContainer;
  let style = {};
  let title = "<Input ";

  if (disabled) {
    title += "disabled ";
    style.pointerEvents = "none";
    style.outline = "1px solid #E0E0E0";
  } else {
    
    if(multiline){
      title += `multiline row="${row}" `
    }
  
    if (fullWidth) {
      title += "fullWidth ";
      style.width = "100%";
      classLabel = classes.labelFullWidth;
      classContainer = classes.fullWidthContainer;
    }
  
    if (value) {
      title += `value="${value}" `;
    }
  
    if (size) {
      switch (size) {
        case "sm":
          style.height = "40px";
          title += `size="${size}"`;
          break;
        case "md":
          title += `siz="${size}"`;
          break;
      }
    }
  
    if (typeof helperText !== "undefined" && helperText !== "") {
      title += `helperText="${helperText}" `;
    }
  
    if (startIcon) {
      title += `startIcon`;
      style.background = `url(${startIcon}) no-repeat`;
      style.backgroundSize = "18px";
      style.backgroundPosition = "5%";
      style.paddingLeft = "45px";
    }
  
    if (endIcon) {
      title += `endIcon`;
      style.background = `url(${endIcon}) no-repeat`;
      style.backgroundSize = "18px";
      style.backgroundPosition = "95%";
    }
  
    if (error) {
      title += "error ";
      classInput = classes.inputError;
      classLabel = classes.labelError;
    }
  }


  title += "/>";

  return (
    <div className={classContainer}>
      <p className={classes.inputTitle}>{title}</p>
      <label className={classLabel}>
        <p
          className={classes.labelP}
          style={{
            textAlign: "left",
            fontFamily: "Noto Sans JP",
            fontSize: "12px",
            fontWeight: 400,
            margin: 0,
          }}
        >
          Label
        </p>
        {!multiline ? (
          <input
            className={classInput}
            style={style}
            placeholder={"Placeholder"}
            disabled={disabled}
            value={enteredInput}
            onChange={(e) => setEnteredInput(e.target.value)}
          />
        ) : (
          <textarea
            className={classInput}
            style={style}
            placeholder={"Placeholder"}
            disabled={disabled}
            value={enteredInput}
            onChange={(e) => setEnteredInput(e.target.value)}
            rows={row}
          ></textarea>
        )}
        {typeof helperText !== "undefined" && helperText !== "" && (
          <p
            style={{
              textAlign: "left",
              fontFamily: "Noto Sans JP",
              fontSize: "12px",
              fontWeight: 400,
              margin: 0,
            }}
            className={classes.underLabelP}
          >
            {helperText}
          </p>
        )}
      </label>
    </div>
  );
};

export default Input;

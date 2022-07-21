import React from "react";

import classes from "./Input.module.css";

const Input = ({ error, disabled, helperText, startIcon, endIcon, iconName }) => {
  let classInput = classes.inputDefault;
  let classLabel = classes.labelDefault;
  let classHelper = classes.helperDefault;
  let style = {};
  let title = "<Input ";

  if(typeof helperText !== "undefined" && helperText !== ""){
    title += `helperText="${helperText}" `;
  }

  if(startIcon) {
    title += `startIcon={${iconName}}`
    style.background =  `url(${startIcon}) no-repeat`
    style.backgroundSize = '18px';
    style.backgroundPosition = '5%'
  }

  if(endIcon) {
    title += `endIcon={${iconName}}`
  }

  if (error) {
    title += "error ";
    classInput = classes.inputError;
    classLabel = classes.labelError;
  }

  if(disabled){
    title += "disabled "
    style.pointerEvents = 'none';
    style.outline = '1px solid #E0E0E0'
  }


  title += "/>";

  return (
    <div className={classes.inputContainer}>
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
        <input
          className={classInput}
          style={style}
          placeholder={"Placeholder"}
          disabled={disabled}
        />
        {typeof helperText !== "undefined" && helperText !== "" && 
          <p
          style={{
            textAlign: "left",
            fontFamily: "Noto Sans JP",
            fontSize: "12px",
            fontWeight: 400,
            margin: 0,
          }}
          className={classes.underLabelP}
          >{helperText}</p>
        }
      </label>
    </div>
  );
};

export default Input;

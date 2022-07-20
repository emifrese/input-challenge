import React from "react";

import classes from "./InputsWrappers.module.css";

const InputsWrappers = ({ children }) => {
  return (
    <div className={classes.inputsWrappers}>
      <h2 className={classes.inputPageTitle}>Inputs</h2>
      {children}
    </div>
  );
};

export default InputsWrappers;

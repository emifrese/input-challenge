import React from 'react'

import classes from './InputPageWrapper.module.css'

const InputPageWrapper = ({children}) => {
  return (
    <div className={classes.container}>{children}</div>
  )
}

export default InputPageWrapper
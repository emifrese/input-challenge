import React from 'react'

import classes from './Header.module.css'

const Header = () => {
  return (
    <div><h2 className={classes.title}><em style={{color: '#F7542E'}}>Dev</em>challenges.io</h2></div>
  )
}

export default Header
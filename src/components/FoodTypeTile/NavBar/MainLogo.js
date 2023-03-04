import React from 'react'
import classes from "./MainLogo.module.css"
import mainLogo from "../../../assets/MainLogo.png"

const MainLogo = () => {
  return (
    <div className={classes.outer}>
        <img className={classes.image} src={mainLogo} alt=""/>
    </div>
  )
}

export default MainLogo
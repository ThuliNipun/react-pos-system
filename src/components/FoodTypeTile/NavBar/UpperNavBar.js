import React from 'react'
import MainLogo from './MainLogo'
import SearchBar from './SearchBar/SearchBar'
import classes from './UpperNavBar.module.css'

const UpperNavBar = () => {
  return (
    <div className={classes.container}>
        <MainLogo/>
        <SearchBar/>
    </div>
  )
}

export default UpperNavBar
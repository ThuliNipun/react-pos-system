import React from 'react'
import search from '../../../../assets/search.png'
import classes from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={classes.outer}>
        <img className={classes.image} src={search} alt="" />
        <input className={classes.input}type={Text} placeholder={'Search'}/>
    </div>
  )
}

export default SearchBar
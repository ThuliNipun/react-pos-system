import React from 'react'
import classes from './FoodTypeTile.module.css';
import breakfast_image from '../../assets/breakfast.png'


const FoodTypeTile = () => {
  return (
    <div className={classes.outer}>
        <img src={breakfast_image} alt=''/>
        <span className={classes.mainTitle} >Breakfast</span>
        <span>13 Items</span>
    </div>
  )
}

export default FoodTypeTile
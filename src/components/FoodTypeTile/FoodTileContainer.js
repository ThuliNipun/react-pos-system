import React from "react";
import classes from "./FoodTileContainer.module.css";
import FoodTypeTile from "./FoodTypeTile";
import breakfast from "../../assets/breakfast.png";
import lunch from "../../assets/lunch.png";
import dinner from "../../assets/dinner.png";
import drinks from "../../assets/drinks.png";
import dessert from "../../assets/dessert.png";
import soup from "../../assets/soup.png";

const FoodTileContainer = () => {
  return (
    <div className={classes.container}>
      <FoodTypeTile
        source={breakfast}
        sub="13 Items"
        heading="Breakfast"
        defColor="#B4FFF6"
        onColor="#2FFFE6"
      />
      <FoodTypeTile
        source={lunch}
        sub="20 Items"
        heading="Lunch"
        defColor="#A4FFB8"
        onColor="#45FF6E"
      />
      <FoodTypeTile
        source={dinner}
        sub="12 Items"
        heading="Dinner"
        defColor="#FFF6A4"
        onColor="#FFEA2C"
      />
      <FoodTypeTile
        source={drinks}
        sub="25 Items"
        heading="Drinks"
        defColor="#9BB7FF"
        onColor="#2764FF"
      />
      <FoodTypeTile
        source={dessert}
        sub="30 Items"
        heading="Desserts"
        defColor="#FFB4B4"
        onColor="#FF8282"
      />
      <FoodTypeTile
        source={soup}
        sub="10 Items"
        heading="Soup"
        defColor="#FDB4FF"
        onColor="#FC7CFF"
      />
    </div>
  );
};

export default FoodTileContainer;

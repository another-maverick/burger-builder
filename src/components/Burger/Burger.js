import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
// below code takes the map object and transforms into burger ingredient elements with keys pointing to number of ingredients and type to the key
  let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
          return [...Array(props.ingredients[igKey])].map((_, i) => {
                  return  <BurgerIngredient key={igKey + i} type={igKey} />;
          });
        })
        .reduce((arr, el) => {
          return arr.concat(el)
        }, []);

        console.log(transformedIngredients);
      if (transformedIngredients.length == 0) {
        transformedIngredients = <p> Please start adding ingredients </p>
      }

  return (
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
    </div>
  );
};


export default burger;

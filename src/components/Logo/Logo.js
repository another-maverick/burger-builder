import React from 'react';
import  burgerLogo from '../../assets/images/burger-logo1.png';
import classes from './Logo.module.css';

const logo =(props) => (
  <div className={classes.Logo} style={{height: props.height}}>
      <img src={burgerLogo} style={{height: 50}} alt="MyBurger"/>
  </div>
);


export default logo;

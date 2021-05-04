/** @format */

import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../Assets/Images/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt='meals' />
            </div>
        </Fragment>
    );
};

export default Header;
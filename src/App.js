/** @format */

import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";

const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHanlder = () => {
        setCartIsShown(true)
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }
    return (
        <Fragment>
            {cartIsShown && <Cart onClose={ hideCartHandler }/>}
            <Header onShowCart = {showCartHanlder} />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
};

export default App;

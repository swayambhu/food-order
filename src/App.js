/** @format */

import React, { useState } from "react";
import CartProvider from './store/CartProvider'
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
        <CartProvider>
            {cartIsShown && <Cart onClose={ hideCartHandler }/>}
            <Header onShowCart = {showCartHanlder} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
};

export default App;

/** @format */
import MealItemForm from './MealItemForm';
import classes from "./MealItem.module.css";
import { useContext } from 'react';
import CartContext from '../../../store/cart-context'

const MealItem = ({ amount, name, desc, id }) => {
    const cartCtx = useContext(CartContext)
    const price = `${amount.toFixed(2)}`;
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price : price
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{desc}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default MealItem;

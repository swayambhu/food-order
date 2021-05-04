/** @format */
import MealItemForm from './MealItemForm';
import classes from "./MealItem.module.css";

const MealItem = ({amount, name, desc}) => {
    const price = `$${amount.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{desc}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    );
};

export default MealItem;

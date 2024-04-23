import { useDispatch } from "react-redux";

import Button from "./Button.jsx";
import { cartActions } from '../store/cart.js';

export default function Meal({ meal }) {
  const dispatch = useDispatch();


  const handleAddToCart = () => {
    dispatch(cartActions.addItem({
      title: meal.title,
      id: meal.id,
      price: meal.price,
      quantity: meal.quantity
    }));
  }

  return (
    <li className="meal-item">
      <div className="meal-item-div">
        <img src={`../../data/images/${meal.image}`} alt={meal.title} />
        <div>
          <h3 className="meal-title">{meal.title}</h3>
          <p className="meal-price">${meal.price}</p>
          <p className="meal-description">{meal.description}</p>
        </div>
        <p><Button className="meal-button" onClick={handleAddToCart}>Add to Cart</Button></p>
      </div>
    </li>
  );
}
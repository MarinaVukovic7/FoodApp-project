import { useSelector, useDispatch } from "react-redux";
import { progressActions } from "../store/progress.js";
import { cartActions } from "../store/cart.js";

import Modal from "./Modal.jsx";
import Button from "./Button.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart () {
  const items = useSelector(state => state.cart.items);
  const progress = useSelector(state => state.progress.progress);
  const dispatch = useDispatch();

  const cartTotal = (items.reduce((totalPrice, item) => totalPrice + (item.quantity * item.price) , 0)).toFixed(2);

  const handleCloseCart = () => {
    dispatch(progressActions.hideCart());
  }

  const handleGoToCheckout = () => {
    dispatch(progressActions.showCheckout());
  }

  return (
  <Modal className="cart" open={progress === 'cart'} onClose={progress === 'cart' ? handleCloseCart : null}>
    <h2>Your Cart</h2>
    <ul>
      {items.map(item => <CartItem key={item.id} price={item.price} quantity={item.quantity} id={item.id} title={item.title} onDecrease={() => dispatch(cartActions.removeItem(item.id))} onIncrease={() => dispatch(cartActions.addItem(item))} />)}
    </ul>
    <p className="cart-total">${cartTotal}</p>
    <p className="modal-actions">
      <Button className="text-button" onClick={handleCloseCart}>Close</Button>
      {items.length > 0 && (<Button onClick={handleGoToCheckout} className="meal-button">Go to Checkout</Button>)}
    </p>
  </Modal>
  )
}
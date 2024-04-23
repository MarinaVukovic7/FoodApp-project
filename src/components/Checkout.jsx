import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { progressActions } from "../store/progress.js";
import { cartActions } from "../store/cart.js";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Modal from "./Modal.jsx";

export default function Checkout() {
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const progress = useSelector(state => state.progress.progress);

  const cartTotal = (items.reduce((totalPrice, item) => totalPrice + (item.quantity * item.price), 0)).toFixed(2);

  const handleClose = () => {
    dispatch(progressActions.hideCheckout());
  }

  const handleFinish = () => {
    handleClose();
    setFormData(undefined);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());
    setFormData(customerData);

    dispatch(progressActions.hideCheckout());
    dispatch(cartActions.clearCart());
  }

  if (formData) {
    return <Modal open onClose={handleFinish}>
      <h2>Great!</h2>
      <p>Your order was submitted. Thank you!</p>
      <p>You will get a confirmation e-mail in a couple of minutes.</p>
      <p className="modal-actions">
        <Button className="meal-button" onClick={handleFinish}>Okay</Button>
      </p>
    </Modal>
  }


 
  return (
    <>
    <Modal open={progress === 'checkout'} onClose={progress === 'checkout' ? handleClose : null}>
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>Total amount: ${cartTotal}</p>
      <Input label="Full name" id="full-name" type="text" />
      <Input label="E-Mail" id="email" type="email" />
      <Input label="Adress" id="adress" type="text" />
      <p className="modal-actions">
        <Button className="text-button" type="button" onClick={handleClose}>Close</Button>
        <Button className="meal-button" type="submit">Submit Order</Button>
      </p>
    </form>
  </Modal>    
  </>
  );
}
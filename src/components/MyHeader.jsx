import { useSelector, useDispatch } from 'react-redux';
import { progressActions } from '../store/progress.js';

import logo from '../../data/images/logo2.jpg';
import Button from './Button.jsx';

export default function MyHeader () {
 const dispatch = useDispatch();
 const items = useSelector(state => state.cart.items);

 const totalCartItems = items.reduce((totalNumberOfItems, item) => {
  return totalNumberOfItems + item.quantity;
}, 0);

const handleShowCart = () => {
  dispatch(progressActions.showCart());
}

  return (
    <header id='top-header'>
      <div>
        <img src={logo} alt="Food App Logo" />
        <h1>Marina's Food App</h1>
      </div>
      <Button className="text-button" onClick={handleShowCart}>Cart ({totalCartItems})</Button>
    </header>
  );
}
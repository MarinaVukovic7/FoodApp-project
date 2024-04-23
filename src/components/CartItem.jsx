export default function CartItem ({ title, quantity, price, id, onDecrease, onIncrease }) {

  return (
    <li className="cart-item" key={id}>
      <p>{title} - {quantity} * ${price}</p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
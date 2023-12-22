import { clearCart } from "../utils/cartslice";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearWholeCart = (item) => {
    dispatch(clearCart(item));
  };
  return (
    <div style={{ minHeight: "100vh" }} className="cart-Page wrapper">
      <div className="cart-card-list">
        {cartItems.map((item) => (
          <CartCard key={item.id} {...item} />
        ))}
      </div>
      <div className="cart-Total-sec">
        <ul>
          {cartItems.map((item) => {
            return <li>{item.price / 100}</li>;
          })}
        </ul>
        <button
          className="cart-add-btn"
          onClick={() => clearWholeCart(cartItems)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;

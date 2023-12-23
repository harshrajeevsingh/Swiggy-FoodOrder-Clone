import { clearCart } from "../utils/cartslice";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";

const EmptyComp = () => {
  return (
    <div className="emptyCartComp">
      <img
        style={{ width: "600px" }}
        src="https://static.vecteezy.com/system/resources/previews/026/985/685/original/single-continuous-line-drawing-pot-is-sprinkled-with-food-ingredients-such-as-vegetables-meat-onions-carrots-salt-pepper-and-other-spices-one-line-draw-graphic-design-illustration-png.png"
        alt="cooking pan image"
      />
      <h2 className="cart-title">Your Cart is Empty.</h2>
    </div>
  );
};
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearWholeCart = (item) => {
    dispatch(clearCart(item));
  };

  if (cartItems.length === 0) return <EmptyComp />;
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
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;

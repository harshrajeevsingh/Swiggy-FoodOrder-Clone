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
    <div className="cart-Page ">
      <div className="cart-wrapper wrapper">
        <div className="cart-card-list">
          {cartItems.map((item) => (
            <CartCard key={item.id} {...item} />
          ))}
        </div>
        <div className="cart-Total-sec">
          <p className="bill-heading">Bill Details</p>
          <div className="total-item">
            <div style={{ flex: "1" }} className="total-item-heading">
              Item Total
            </div>
            <div className="total-item-heading">
              ₹
              {cartItems.reduce(
                (total, item) => total + item.amount * (item.price / 100),
                0
              )}
            </div>
          </div>
          <div
            className="total-item"
            style={{
              borderBottom: "1.5px dashed #d3d3d3",
              paddingBottom: "20px",
            }}
          >
            <div
              style={{
                flex: "1",
              }}
            >
              Delievery Fee | 4.9 kms
            </div>
            <div style={{ color: "#3d9b6d" }}>
              <span
                style={{ textDecoration: "line-through", color: "#8b8d97" }}
              >
                ₹0.00
              </span>{" "}
              Free
            </div>
          </div>
          <div className="total-item" style={{ marginTop: "10px" }}>
            <div
              style={{
                flex: "1",
              }}
            >
              Delievery Tip
            </div>
            <div style={{ color: "	#B22222" }} className="total-item-heading">
              Add Tip
            </div>
          </div>
          <div className="total-item">
            <div style={{ flex: "1" }} className="total-item-heading">
              Platform Fee
            </div>
            <div className="total-item-heading">₹5</div>
          </div>
          <div className="total-item">
            <div style={{ flex: "1" }} className="total-item-heading">
              GST & Restaurant Charges
            </div>
            <div className="total-item-heading">₹120</div>
          </div>
          <div
            className="total-item"
            style={{
              marginTop: "20px",
              paddingTop: "10px",
              borderTop: "1.5px solid #3e4152",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{ flex: "1", fontWeight: "600" }}
              className="bill-heading"
            >
              To Pay
            </div>
            <div className="bill-heading" style={{ fontWeight: "600" }}>
              ₹
              {cartItems.reduce(
                (total, item) => total + item.amount * (item.price / 100),
                125
              )}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              style={{ marginTop: "20px" }}
              className="cart-clear-btn"
              onClick={() => clearWholeCart(cartItems)}
            >
              Clear Cart
            </button>
            <button
              style={{ marginTop: "20px" }}
              className="cart-pay-btn"
              // onClick={() => clearWholeCart(cartItems)}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

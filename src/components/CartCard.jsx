import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../contants";
import { removeItem, addItem } from "../utils/cartslice";

// const CartCard = ({ name, imageId, price }) => {

const CartCard = (props) => {
  const itemRead = useSelector((store) => store.cart.items);
  const itemExist = itemRead.find((i) => i.id === props.id);
  const dispatch = useDispatch();

  const removeFoodItem = (item) => {
  dispatch(removeItem(item))
}
  const addFoodItem = (item) => {
  dispatch(addItem(item));
};
  return (
    <article>
      <div className="card2">
        <div>
          <img src={IMG_CDN_URL + props.imageId} className="thumbnail" />
        </div>
        <p className="cart-card-name">{props.name}</p>
        <p className="cart-card-name">₹ {props.price/100} <span className="span-amount">X{props.amount}</span></p>
        {/* <button className="cart-add-btn" onClick={() => removeFoodItem(props)}>Remove</button> */}
        <div className="cart-card-container">
           <button
                    className="add-btn"
                    disabled={false}
                  ><div className="add-item-cont">
                  <div className="add-item-btn">
                    {itemExist.amount}
                  </div>
                </div>
              </button>
              {itemExist?.amount > 0 && (
                    <button
                      className="add-item-cont-inc-cart"
                      onClick={() => addFoodItem(props)}
                    >
                      <div className="add-item-btn-inc">+</div>
                    </button>
                  )}
                  {itemExist?.amount > 0 && (
                    <button
                      className="add-item-cont-dec-cart"
                      onClick={() => removeFoodItem(props)}
                    >
                      <div className="add-item-btn-inc">-</div>
                    </button>
                  )}
                  </div>
      </div>
    </article>
  );
};

export default CartCard;

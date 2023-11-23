import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../contants";
import { removeItem } from "../utils/cartslice";

// const CartCard = ({ name, imageId, price }) => {
const CartCard = (props) => {

const dispatch = useDispatch();

const removeFoodItem = (item) => {
  dispatch(removeItem(item))
}

  return (
    <article>
      <div className="card2">
        <div>
          <img src={IMG_CDN_URL + props.imageId} className="thumbnail" />
        </div>
        {console.log("hello")}
        <p className="card-res-name">{props.name}</p>
        <p className="card-res-name">{props.price / 100}</p>
        <button className="cart-add-btn" onClick={() => removeFoodItem(props)}>Remove</button>
      </div>
    </article>
  );
};

export default CartCard;

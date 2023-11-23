import { useParams } from "react-router-dom";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
} from "../contants";
import useResMenuData from "../utils/useResMenuData";
import { FaStar } from "react-icons/fa";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  // how to read a dynamic URL Params
  const { resId } = useParams();
  const [restaurant, menuItems] = useResMenuData(swiggy_menu_api_URL, resId);
  //   console.log(useResMenuData(swiggy_menu_api_URL, resId));
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return restaurant && menuItems ? (
    <article className="menu-page wrapper2">
      {/* -------------------------Restaurant Info--------------------------- */}
      <div className="res-Menu-Header-cont">
        <div>
          <p className="res-Menu-title">{restaurant?.name}</p>
          <p className="res-Menu-header-info">
            {restaurant?.cuisines.join(", ")}
          </p>
          <p className="res-Menu-header-info">{restaurant?.areaName}</p>
        </div>
        <button className="review-btn">
          <span className="rating-box">
            <span>
              <FaStar /> {` `}
              {restaurant?.avgRating}
            </span>
          </span>
          <span className="total-rating">{restaurant?.totalRatingsString}</span>
        </button>
      </div>
      {/* ----------------------Extra Info(Time & Cost) ---------------------- */}
      <div style={{ margin: "18px 0px" }}>
        <ul>
          <li>
            <svg
              className="res-icon-cost-time"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                r="8.35"
                transform="matrix(-1 0 0 1 9 9)"
                strokecolor="#3E4152"
                strokeWidth="1.3"
              ></circle>
              <path
                d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                fill="#3E4152"
              ></path>
            </svg>
            <span>{restaurant?.sla?.slaString}</span>
          </li>
          <li>
            <svg
              className="res-icon-cost-time"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                cx="9"
                cy="9"
                r="8.25"
                strokecolor="#3E4152"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                fill="#3E4152"
              ></path>
            </svg>
            <span>{restaurant?.costForTwoMessage}</span>
          </li>
        </ul>
      </div>
      <hr aria-hidden="true" class="menu-separater "></hr>
      {/* ---------------------------Menu---------------------------- */}
      <div>
        <h4
          style={{ marginTop: "30px", marginBottom: "35px" }}
          className="recommended-title"
        >
          Recommended ({menuItems.length})
        </h4>
        <div>
          {console.log(menuItems)}
          {menuItems.map((item) => {
            return (
              <div key={item.id} className="menu-detail-box">
                <div>
                  <h3 className="item-name">{item.name}</h3>
                  <span className="item-price">{item.price / 100}</span>
                  <div className="item-description">{item?.description}</div>
                </div>
                <div className="image-container">
                  <button onClick={() => addFoodItem(item)} className="add-btn">
                    <img
                      className="item-image"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                    />

                    <div className="add-item-cont">
                      <div className="add-item-btn">Add</div>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {console.log(`Restaurant id : ${resId}`)}
    </article>
  ) : (
    <Shimmer />
  );
};

export default RestaurantMenu;

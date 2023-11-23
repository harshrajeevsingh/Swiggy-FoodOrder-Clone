import { useState, useEffect } from "react";

const useResMenuData = (swiggy_menu_api_URL, resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(swiggy_menu_api_URL + resId);
    const json = await data.json();
    console.log(json);

    const restaurantData = json?.data?.cards[0]?.card?.card?.info;
    // console.log(restaurantData);
    setRestaurant(restaurantData);

    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["type"] == "CATEGORY_TYPE_RECOMMENDED")
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    // console.log(menuItemsData);

    setMenuItems(menuItemsData);
  }

  return [restaurant, menuItems];
};

export default useResMenuData;

import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="shimmer-menu-div">
      <div className="shimmer-menu-top"></div>
      {Array(5)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-menu-item">
            <div className="shimmer-menu-info"></div>
            <div className="shimmer-menu-img"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerMenu;

import React, { useContext } from "react";
import "./FoodDisplay.css";
import StoreContextProvider from "../../context/storeContext";

function FoodDisplay() {
  const food_list = useContext(StoreContextProvider);

  return (
    <div className='food-list' id='food-list'>
      <h2>Top dishes near you</h2>
      <div>
        {food_list.map((item, index) => {
          <div></div>;
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;

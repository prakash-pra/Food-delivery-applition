import React, { useContext } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../context/storeContext";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  //   console.log("food list..", food_list);

  return (
    <div className='food-display' id='food-list'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list-item'>
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;

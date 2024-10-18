import React, { useContext } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";

function FoodDisplay({ category }) {
  const { food_list, url } = useContext(StoreContext);

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
                image={`${url}/images/` + item.image}
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

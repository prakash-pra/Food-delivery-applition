import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
function ExploreMenu() {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Nunc non erat non tellus convallis lobortis eget vel nunc. Cras lacus
        est, lobortis et dapibus ac, tempor ac lacus. Sed vel sollicitudin dui.
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div key={index} className='explore-menu-list-item'>
              <img src={item.menu_image} alt='' />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreMenu;

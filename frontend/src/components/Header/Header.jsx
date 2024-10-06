import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
          ligula id quam venenatis pharetra. Nunc laoreet, arcu ac convallis
          malesuada, massa leo laoreet urna,{" "}
        </p>
        <button>view menu</button>
      </div>
    </div>
  );
}

export default Header;

import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
function PlaceOrder() {
  const { getTotalCartAmount, food_list, token, cartItem, url } =
    useContext(StoreContext);

  const [userinfo, setUserinfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserinfo({ ...userinfo, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const orderItems = [];

    food_list.map((item) => {
      if (cartItem[item._id] > 0) {
        const itemInfo = item;

        itemInfo["quantity"] = cartItem[item._id];

        orderItems.push(itemInfo);
      }
    });

    let orderDetails = {
      address: userinfo,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    let response = await axios.post(`${url}/api/order/place`, orderDetails, {
      headers: { token },
    });

    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input
            onChange={onChangeHandler}
            value={userinfo.firstname}
            name='firstname'
            type='text'
            placeholder='First Name'
            required
          />
          <input
            onChange={onChangeHandler}
            value={userinfo.lastname}
            name='lastname'
            type='text'
            placeholder='Last Name'
            required
          />
        </div>
        <input
          onChange={onChangeHandler}
          value={userinfo.email}
          name='email'
          type='email'
          placeholder='Email address'
          required
        />
        <input
          onChange={onChangeHandler}
          value={userinfo.street}
          name='street'
          type='text'
          placeholder='Street'
          required
        />
        <div className='multi-fields'>
          <input
            onChange={onChangeHandler}
            value={userinfo.city}
            name='city'
            type='text'
            placeholder='City'
            required
          />
          <input
            onChange={onChangeHandler}
            value={userinfo.state}
            name='state'
            type='text'
            placeholder='State'
            required
          />
        </div>
        <div className='multi-fields'>
          <input
            onChange={onChangeHandler}
            value={userinfo.zipcode}
            name='zipcode'
            type='text'
            placeholder='Zip Code'
            required
          />
          <input
            onChange={onChangeHandler}
            value={userinfo.country}
            name='country'
            type='text'
            placeholder='Country'
            required
          />
        </div>
        <input
          onChange={onChangeHandler}
          value={userinfo.phone}
          name='phone'
          type='text'
          placeholder='Phone'
          required
        />
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;

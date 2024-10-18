import React, { useContext, useEffect, useState } from "react";
import "./LoginPopUP.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

function LoginPopUP({ setShowLoginPopUp }) {
  const { url, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser((user) => ({ ...user, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    let newUrl = url;

    if (currentState === "Login") {
      newUrl += `/api/user/login`;
    } else {
      newUrl += `/api/user/register`;
    }

    const response = await axios.post(newUrl, user);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLoginPopUp(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onSubmitHandler} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLoginPopUp(false)}
            src={assets.cross_icon}
            alt=''
          />
        </div>
        <div className='login-popup-inputs'>
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              onChange={onChangeHandler}
              name='name'
              value={user.name}
              type='text'
              placeholder='Your Name'
              required
            />
          )}

          <input
            onChange={onChangeHandler}
            value={user.email}
            name='email'
            type='email'
            placeholder='Your Email'
            required
          />
          <input
            onChange={onChangeHandler}
            value={user.password}
            name='password'
            type='password'
            placeholder='Password'
            required
          />
        </div>
        <button type='submit' className='loginpopup-btn'>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>BY continuing, i agree to the terms of use and private policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new Account ?
            <span onClick={() => setCurrentState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an Account ?
            <span onClick={() => setCurrentState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopUP;

import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUP from "./components/LoginPopUp/LoginPopUP";
import PaymentVerify from "./pages/Verify/PaymentVerify";

const App = () => {
  const [showLoginPopUp, setShowLoginPopUp] = useState(false);

  return (
    <>
      {showLoginPopUp ? (
        <LoginPopUP setShowLoginPopUp={setShowLoginPopUp} />
      ) : (
        <></>
      )}

      <div className='app'>
        <Navbar setShowLoginPopUp={setShowLoginPopUp} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<PaymentVerify />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

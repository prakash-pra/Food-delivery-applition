import React, { useContext, useEffect } from "react";
import "./paymentVerify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";
import axios from "axios";

function paymentVerify() {
  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { url } = useContext(StoreContext);

  const navigate = useNavigate();
  const verifyPayment = async () => {
    const response = await axios.post(`${url}/api/order/verify`, {
      success,
      orderId,
    });

    console.log("response", response.data);

    if (response.data.success) {
      console.log("checking for myorder");

      navigate("/myorder");
    } else {
      console.log("checking for home");

      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className='spinner-container'>
      <div className='spinner'></div>
    </div>
  );
}

export default paymentVerify;

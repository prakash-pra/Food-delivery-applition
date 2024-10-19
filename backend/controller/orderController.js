import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY);

//place the order
const placeOrder = async (req, res) => {
  //front-end url
  const url = "http://localhost:5173";

  try {
    const newOrder = await orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();

    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "nzd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "nzd",
        product_data: {
          name: "Delivery Charge",
        },
        unit_amount: 2 * 100,
      },
      quantity: 1,
    });

    //stripe session
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//verify order

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  console.log(req.body);
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "not paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: "Error" });
  }
};

export { placeOrder, verifyOrder };

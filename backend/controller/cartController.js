import userModel from "../models/userModel.js";

//add item to user cart

const addToCart = async (req, res) => {
  //   const { userId } = req.body;

  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    const cartData = user.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    const userCart = await userModel.findByIdAndUpdate(req.body.userId, {
      cartData,
    });

    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//remove item from user cart

const removeFromCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);

    const cartData = user.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.json({ success: true, message: "cart item removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//get the cart items
const getCartItems = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    const cartItems = await user.cartData;

    res.json({ success: true, data: cartItems });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCartItems };

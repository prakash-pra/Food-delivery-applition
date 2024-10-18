import express from "express";
import {
  addToCart,
  getCartItems,
  removeFromCart,
} from "../controller/cartController.js";
import authMiddleware from "../middlewares/auth.js";

const cartRouter = express.Router();

//add to cart route
cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.get("/cartList", authMiddleware, getCartItems);

export default cartRouter;

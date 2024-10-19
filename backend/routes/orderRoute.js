import express from "express";
import middleware from "../middlewares/auth.js";
import { placeOrder, verifyOrder } from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", middleware, placeOrder);
orderRouter.post("/verify", verifyOrder);

export default orderRouter;

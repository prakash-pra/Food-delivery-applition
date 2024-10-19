import express from "express";
import middleware from "../middlewares/auth.js";
import { placeOrder } from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", middleware, placeOrder);

export default orderRouter;

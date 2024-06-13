import express from "express"
import { placeOrder } from "../controllers/orderController.js"
import authMiddleware from "../middlewares/auth.js";
import { verifyOrder } from "../controllers/orderController.js";


const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware,placeOrder);
orderRouter.post("/verify", authMiddleware,verifyOrder);

export default orderRouter;
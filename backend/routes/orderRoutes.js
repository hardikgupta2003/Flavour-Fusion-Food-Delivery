import express from "express"
import { listOrders, placeOrder, updateOrderStatus, userOrders } from "../controllers/orderController.js"
import authMiddleware from "../middlewares/auth.js";
import { verifyOrder } from "../controllers/orderController.js";


const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders", authMiddleware,userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateOrderStatus);

export default orderRouter;
import { Router } from "express";
import * as orderController from '../controllers/order.controller.js';
import authUser from "../middlewares/auth.middleware.js";
import authSeller from "../middlewares/authSeller.middleware.js";

const orderRouter = Router();

orderRouter.post('/cod', authUser, orderController.placeOrderCOD);
orderRouter.get('/user', authUser, orderController.getUserOrders);
orderRouter.get('/seller', authSeller, orderController.getAllOrders);

export default orderRouter; 
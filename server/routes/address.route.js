import { Router } from "express";
import authUser from "../middlewares/auth.middleware.js";
import * as addressController from "../controllers/address.controller.js";

const addressRouter = Router();

addressRouter.post('/add', authUser, addressController.addAddress);
addressRouter.get('/get', authUser, addressController.getAddress);

export default addressRouter;
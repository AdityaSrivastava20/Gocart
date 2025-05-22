import { Router } from "express";
import * as sellerController from '../controllers/seller.controller.js';
import authSeller from "../middlewares/authSeller.middleware.js";

const sellerRouter = Router();

sellerRouter.post('/login', sellerController.sellerLogin);
sellerRouter.get('/is-auth', authSeller, sellerController.isAuthSeller);
sellerRouter.get('/logout', sellerController.sellerLogout);

export default sellerRouter;
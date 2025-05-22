import { Router } from 'express';
import authUser from '../middlewares/auth.middleware.js';
import * as cartController from '../controllers/cart.controller.js';

const cartRouter = Router();

cartRouter.post('/update', authUser, cartController.updateCart);


export default cartRouter;

import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import authUser from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post('/register', userController.registerController);
userRouter.post('/login', userController.loginController);
userRouter.get('/is-auth', authUser, userController.isAuthController);
userRouter.get('/logout', authUser, userController.logoutController);

export default userRouter;
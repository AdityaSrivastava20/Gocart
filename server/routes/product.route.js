import { Router } from 'express';
import upload from '../config/multer.js';
import authSeller from '../middlewares/authSeller.middleware.js';
import * as productController from '../controllers/product.controller.js';

const productRouter = Router();

productRouter.post('/add', upload.array(['images']), authSeller, productController.addProduct);
productRouter.get('/list', productController.productList);
productRouter.get('/id', productController.productById);
productRouter.post('/stock', authSeller, productController.changeStock);

export default productRouter;   
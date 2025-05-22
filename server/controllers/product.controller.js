import { v2 as cloudinary } from 'cloudinary';
import { Product } from '../models/product.model.js';

// Add Product : api/product/add
const addProduct = async (req, res) => {
    try {
        let product = JSON.parse(req.body.productData);

        const images = req.files

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
                return result.secure_url
            })
        )
        await Product.create({...product, image: imagesUrl});
        res.json({success: true, message: "Product Added"});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Get Product : api/product/list
const productList = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json({success: true, products});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Get single Product By Id : api/product/:id
const productById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.json({success: true, product});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Change Product inStock : api/product/stock
const changeStock = async (req, res) => {
    try {
        const { id, inStock } = req.body;
        await Product.findByIdAndUpdate(id, {inStock});
        res.json({success: true, message: "Stock Updated"});

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

export {
    addProduct,
    productList,
    productById,
    changeStock
}
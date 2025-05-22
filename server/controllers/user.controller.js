import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register User : /api/user/Register
const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({success: false, message: "Missing Details"});
        }

        const existingUser = await User.findOne({email})

        if(existingUser ) {
            return res.json({success: false, message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.cookie('token', token, {
            httpOnly: true, //Prevent JavaScript to access the cookie
            secure: process.env.NODE_ENV === 'production', //Only send the cookie over HTTPS in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', //Prevent CSRF attacks
            maxAge: 7 * 24 * 60 * 60 * 1000 // Cookie expiration time: 7 days
        })

        return res.json({success: true, user: {email: user.email, name: user.name}});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Login Controller
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.json({success: false, message: "Email and Password are required"});
        }

        const user = await User.findOne({email});

        if(!user) {
            return res.json({success: false, message: "Invalid email or password"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.json({success: false, message: "Invalid email or password"});
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie('token', token, {
            httpOnly: true, //Prevent JavaScript to access the cookie
            secure: process.env.NODE_ENV === 'production', 
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', 
            maxAge: 7 * 24 * 60 * 60 * 1000 
        })

        return res.json({success: true, user: {email: user.email, name: user.name}});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Check Auth
const isAuthController = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        return res.status(200).json({success: true, user});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

// Logout Controller
const logoutController = async (req, res) => {
    try {

        res.clearCookie('token', {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
        });

        res.status(200).json({
            success: true,
            message: "Logged Out Successfully"
        });

    }catch (error) {
        console.error(error);
        res.status(400).send(error.message); 
    }
}



export {
    registerController,
    loginController,
    isAuthController,
    logoutController,
}
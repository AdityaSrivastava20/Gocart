import jwt from 'jsonwebtoken';

//  Login seller : /api/seller/login
const sellerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        if(password === process.env.SELLER_PASSWORD && email === process.env.SELLER_EMAIL) {
            const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '7d'});
            res.cookie('sellerToken', token, {
                httpOnly: true, //Prevent JavaScript to access the cookie
                secure: process.env.NODE_ENV === 'production', 
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', 
                maxAge: 7 * 24 * 60 * 60 * 1000 
            })
    
            return res.status(200).json({success: true, message: "Logged In Successfully"});
        }
        else {
            return res.json({ success: false, message: "Invalid Credentials" }); 
        }
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}


//  Seller isAuth : /api/seller/is-auth
const isAuthSeller = async (req, res) => {
    try {
        return res.json({success: true});
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message});
    }
}

//  Logout seller : /api/seller/logout
const sellerLogout = async (req, res) => {
    try {

        res.clearCookie('sellerToken', {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
        });

        res.status(200).json({
            success: true,
            message: "Logged Out Successfully"
        });

    }catch (error) {
        console.log(error.message);
        res.status(400).json({ success: false, message: error.message }); 
    }
}


export {
    sellerLogin,
    isAuthSeller,
    sellerLogout
}
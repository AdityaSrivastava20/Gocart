import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        
        if (tokenDecode.id) {
            req.user = { id: tokenDecode.id }; // use req.user, not req.body
           
        } else {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: error.message });
    }
};

export default authUser;

import { User } from "../models/user.model.js";


// Update user cartData : 'api/cart/update'
const updateCart = async (req, res) => {
    const userId = req.user.id;
    const { cartItems } = req.body;

  if (!cartItems) {
    return res.status(400).json({ success: false, message: "Cart items required" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    user.cartItems = cartItems;
    await user.save();

    res.json({ success: true, message: "Cart updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
} 

export {
  updateCart
} 

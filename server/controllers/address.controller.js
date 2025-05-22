import { Address } from "../models/address.model.js";

// Add Address : /api/address/add
const addAddress = async (req, res) => {
    try {
        const { address } = req.body;
        const userId = req.user.id;

        await Address.create({ ...address, userId });
        res.json({ success: true, message: "Address Added Successfully" });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// Get Address : 'api/address/get'
const getAddress = async (req, res) => {
    try {
        const userId = req.user.id;

        const addresses = await Address.find({ userId });
        res.json({ success: true, addresses });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

export {
    addAddress,
    getAddress,
}
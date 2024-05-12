import User from "../models/user.js"
import bcrypt from "bcryptjs"

export const login = async (req, res) => {
    const {email, password}  = req.body;

    try {
        if(!email || !password) return res.status(502).json({
            message: "please provide all the details"
        });

        const user = await User.findOne({email: email});
        
        if(!user) return res.status(501).json({
            message: "No user existed"
        })
        const compare = bcrypt.compare(password, user.password);

        if(compare) return res.status(203).json({
            message: "login successful"
        })
        return res.status(503).json({
            message: "Wrong user details"
        })

    } catch (error) {
        console.log("error in login route", error)
        return res.status(402).json({
            message: "Server error for login route",
            err: error
        })
    }
}
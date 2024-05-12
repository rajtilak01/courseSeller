import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    console.log("req.body", req.body)
    const {email, username, password} = req.body;

    try {
        if(!email || !password || !username) return res.status(502).json({
            message: "Please provide all the details"
        })  
        
        const existingUser = await User.findOne({email: email});
        if(existingUser) return res.status(501).json({
            message: "User already registered"
        })
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            email: email,
            password: hashedPassword,
            username: username
        })

        return res.status(200).json({
            message: "Signup successful",
            data: user
        })
    } catch (error) {
        console.log("Error in sign up route", error)
        return res.status(403).json({
            message: "Error in sign up route",
            error: error
        })
    }
}
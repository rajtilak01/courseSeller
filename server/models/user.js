import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        // required: true,
    },
    isPublisher: {
        type: Boolean,
        default: false
    }
})

// const user = mongoose.model('userSchema', userSchema)

export default mongoose.model('User', userSchema)
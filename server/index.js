import express from "express"
const app = express();
import dotenv from "dotenv"
import connectDB from "./config/db.js";

import userRouter from "./routes/users.js"
import courseRouter from "./routes/course.js"

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRouter);
app.use('/course', courseRouter);

dotenv.config();

const PORT = process.env.PORT || 4000;

connectDB();
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
})
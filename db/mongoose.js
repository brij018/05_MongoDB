import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/student");
        console.log("mongodb connected");
    } catch (error) {
        console.log("DB connection failed:", error.message);
    }
}

export default connectDB;
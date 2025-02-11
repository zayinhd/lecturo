import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const uri = process.env.ATLAS_URI
const connectDB = async () => {
    try {
        await mongoose.connect(`${uri}`, {
        });

        console.log("MongoDB connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;

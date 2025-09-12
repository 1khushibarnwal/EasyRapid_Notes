import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected successfully!");
  } catch (err) {
    console.error("error connecting to DB", err);
    process.exit(1);
  }
};

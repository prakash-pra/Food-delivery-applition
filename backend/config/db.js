import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Prakash:prakash87902@cluster0.qujov.mongodb.net/food-delivery",
    )
    .then(() => {
      console.log("DB connected successfully...");
    });
};

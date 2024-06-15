import mongoose from "mongoose"

export const DBConnect = async () => {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log("DB connected successfully");
      })
      .catch((e) => {
        console.log("DB connection Failed : ", e);
      });
}
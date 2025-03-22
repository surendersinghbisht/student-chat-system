import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import mongoose from "mongoose";
import requestRoute from "./Routes/request.route.js"

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error.message}`);
		process.exit(1);
	}
};

app.use("/api/auth", authRoute);
app.use("api/request", requestRoute);


app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
  connectDB();
});
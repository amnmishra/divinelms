import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from 'cloudinary';
import connectDB from './config/db.js'

import { countryRoutes } from "./routes/countryRoutes.js"


import path from "path";

dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 4010;

const __dirname= path.resolve();

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"]
}));

// Create Supper Admin
app.use("/api/country", countryRoutes);

// Auth
// app.use("/api/user", user);



app.use(express.static(path.join(__dirname, 'public')));


connectDB().then(() => console.log('MongoDB Connected Successfully'))
.catch(err => console.error('MongoDB Connection Error:', err));


app.get('/', (req, res) => {
  res.send('Student Registration API is Running');
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

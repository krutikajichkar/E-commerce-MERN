import express from "express";
import { products } from "./data/products.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

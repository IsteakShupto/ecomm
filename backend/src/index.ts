import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./routes/product";
import { errorHandler, notFound } from "./middleware/errorHandler";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/products", productRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server has started successfully on port ${port}`);
});

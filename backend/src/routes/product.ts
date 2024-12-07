import express from "express";
import { getProducts, getProductById } from "../controllers/productController";

const productRouter = express.Router();

productRouter.route("").get(getProducts);
productRouter.route("/:id").get(getProductById);

export default productRouter;

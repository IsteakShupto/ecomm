import express from "express";
import { PrismaClient } from "@prisma/client";
import asyncHandler from "../middleware/asyncHandler";

const prisma = new PrismaClient();

const getProducts = asyncHandler(async (req: any, res: any) => {
  const products = await prisma.product.findMany({});
  if (products) {
    res.json({
      products,
    });
  } else {
    res.status(404);
    throw new Error(`Resource not found`);
  }
});

const getProductById = asyncHandler(async (req: any, res: any) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.id,
    },
  });
  if (product) {
    res.json({
      product,
    });
  } else {
    res.status(404);
    throw new Error(`Resource not found`);
  }
});

export { getProducts, getProductById };

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getProducts = void 0;
const client_1 = require("@prisma/client");
const asyncHandler_1 = __importDefault(require("../middleware/asyncHandler"));
const prisma = new client_1.PrismaClient();
const getProducts = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield prisma.product.findMany({});
    if (products) {
        res.json({
            products,
        });
    }
    else {
        res.status(404);
        throw new Error(`Resource not found`);
    }
}));
exports.getProducts = getProducts;
const getProductById = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield prisma.product.findUnique({
        where: {
            id: req.params.id,
        },
    });
    if (product) {
        res.json({
            product,
        });
    }
    else {
        res.status(404);
        throw new Error(`Resource not found`);
    }
}));
exports.getProductById = getProductById;

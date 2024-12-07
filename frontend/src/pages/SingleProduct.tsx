import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductProps } from "../components/Product";

export default function SingleProduct() {
  const [product, setProduct] = useState<ProductProps>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      const result = await axios.get(
        `http://localhost:3000/api/products/${id}`
      );
      setProduct(result.data.product);
      setLoading(false);
    }

    getProduct();
  }, [id]);

  if (loading === true) {
    return (
      <div className="text-center my-10 font-extrabold text-4xl text-gray-800">
        Loading...
      </div>
    );
  }

  return (
    <div className="my-10 mx-5 font-extrabold text-gray-800">
      <h1 className="text-3xl font-extrabold text-center">{product?.name}</h1>
      <div className="mt-10 flex flex-wrap xl:flex-nowrap gap-3 border-4 border-gray-800 p-3">
        <div>
          <img
            className="rounded-md w-96"
            src={`../.${product?.image}`}
            alt=""
          />
        </div>
        <div className="flex flex-col flex-wrap justify-between">
          <p className="text-3xl">Description: {product?.description}</p>
          <p className="text-xl">Brand name: {product?.brand}</p>
          <p className="text-xl">Category: {product?.category}</p>
          <p className="text-xl">Overall rating: {product?.rating}</p>
          <p className="text-xl">Number of reviews: {product?.numReviews}</p>
          <div className="flex flex-col gap-2 text-2xl bg-gray-800 text-blue-200 text-center max-w-xs p-3 rounded-md">
            <p>Price: {product?.price}</p>
            <p>In stock: {product?.countInStock}</p>
            <button className="bg-blue-200 text-gray-800">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

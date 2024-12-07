import axios from "axios";
import { useEffect, useState } from "react";
import Product, { ProductProps } from "./Product";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, serLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      const result = await axios.get("http://localhost:3000/api/products");
      setProducts(result.data.products);
      serLoading(false);
    }

    getProducts();
  }, []);

  if (loading === true) {
    return (
      <div className="text-center my-10 font-extrabold text-4xl text-gray-800">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-8 my-12">
      <div className="flex flex-wrap justify-between">
        {products.length &&
          products.map((product: ProductProps) => {
            return (
              <Link to={`/products/${product.id}`} key={product.id}>
                <Product
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  description={product.description}
                  brand={product.brand}
                  category={product.category}
                  price={product.price}
                  countInStock={product.countInStock}
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

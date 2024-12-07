export interface ProductProps {
  id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

export default function Product({
  id,
  name,
  image,
  description,
  brand,
  category,
  price,
  countInStock,
  rating,
  numReviews,
}: ProductProps) {
  return (
    <div className="mx-2 my-4 rounded-md border-4 border-gray-800 max-w-lg">
      <div className="text-center">
        <div id={id} className="p-3">
          <img className="h-72 mx-auto rounded-md" src={image} alt="" />
          <h3 className="text-2xl text-gray-800 font-extrabold mt-3 mb-1">
            {name}
          </h3>
          <p className="text-md text-gray-800 font-extrabold mt-3 mb-1">
            {description}
          </p>
          <div className="flex justify-center gap-2 mt-3">
            <p className="bg-gray-800 text-blue-200 font-extrabold p-1 rounded-md">
              Brand: {brand}
            </p>
            <p className="bg-gray-800 text-blue-200 font-extrabold p-1 rounded-md">
              Category: {category}
            </p>
          </div>
          <p className="mt-3 mb-1 bg-blue-200 text-gray-800 font-extrabold rounded-md">
            Price: ${price}
          </p>
          <p className="mb-1 bg-blue-200 text-gray-800 font-extrabold rounded-md">
            In stock: {countInStock}
          </p>
          <p className="bg-blue-200 text-gray-800 font-extrabold rounded-md">
            Rating: {rating / numReviews} out of 5
          </p>
          <button className="bg-gray-800 text-blue-200 py-1 px-3 font-extrabold mt-3 rounded-md">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

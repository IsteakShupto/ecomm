interface ProductProps {
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  stockCount: number;
  rating: number;
  numReviews: number;
}

export default function Product({
  name,
  image,
  description,
  brand,
  category,
  price,
  stockCount,
  rating,
  numReviews,
}: ProductProps) {
  return <div></div>;
}

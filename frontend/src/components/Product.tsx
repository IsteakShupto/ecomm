interface ProductProps {
  title: string;
  imgDirectory: string;
  price: number;
}

export default function Product({ title, imgDirectory, price }: ProductProps) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={imgDirectory} alt="" />
      <p>{price}</p>
      <button>Add to cart</button>
    </div>
  );
}

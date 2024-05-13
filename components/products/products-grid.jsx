import ProductItem from "./product-item";

export default function ProductsGrid({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
        
          <ProductItem {...product} />
        </li>
      ))}
    </ul>
  );
}

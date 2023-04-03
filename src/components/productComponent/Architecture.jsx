import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard";

export default function Architecture() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  if (isLoading) return;
  const filteredProducts = products.filter((product) => {
    return product.category.toString() === "산업폐기물";
  });
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-5 lg-grid-cols-5 gap-4 p-4">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}

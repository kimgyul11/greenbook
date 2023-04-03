import React from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-2 md:grid-cols-5 lg-grid-cols-5 gap-4 p-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}

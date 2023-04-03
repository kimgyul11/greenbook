import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
      className="
      lg:hover:scale-105 transition-transform ease-in-out duration-500
      flex flex-col items-center justify-center h-80 rounded-lg shadow-md overflow-hidden cursor-pointer
      "
    >
      <div className="h-36 w-36 p-4">
        <img className="w-full " src={image} alt={title} />
      </div>
      <div className="mt-2 px-2 text-lg text-center">
        <h3 className="font-bold">{title}</h3>
        <p className="mb-2 px-2 text-gray-600">{category}</p>
      </div>
    </li>
  );
}

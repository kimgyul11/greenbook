import React from "react";
import useCart from "../hooks/useCart";

export default function CartItem({
  product,
  product: { id, image, title, options, quantity, price },
}) {
  const { removeItem } = useCart();

  const handleDelete = () => removeItem.mutate(id);
  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title}></img>
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-brand">{options}</p>
          <p>₩{price}</p>
        </div>
        <div className="text-2xl flex items-center">
          <p className="cursor-pointer" onClick={handleDelete}>
            🗑️
          </p>
        </div>
      </div>
    </li>
  );
}

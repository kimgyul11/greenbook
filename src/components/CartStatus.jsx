import React from "react";

import useCart from "../hooks/useCart";

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();
  return (
    <div className="relative">
      <p>수거함</p>
      {products && (
        <p className=" w-5 text-center font-bold rounded-full text-white bg-black absolute -top-4 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}

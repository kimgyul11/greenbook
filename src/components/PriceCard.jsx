import React from "react";

export default function PriceCard({ text, price }) {
  return (
    <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-md md:text-xl">
      <p className="text-md">{text}</p>
      <p className="font-bold">₩{price}</p>
    </div>
  );
}

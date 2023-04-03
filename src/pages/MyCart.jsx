import React from "react";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";
export default function MyCart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();
  if (isLoading) return <p>로딩중...</p>;
  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className="p-5 flex flex-col">
      <p className="text-2xl text-center font-bold pb-4 border-b">
        지구를 위한 작은 실천
      </p>
      {!hasProducts && (
        <div className="empty">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10229/10229227.png"
            alt=""
          />
          <p className="my-4 font-bold">휴지통에 아무것도 없습니다!</p>
        </div>
      )}
      {hasProducts && (
        <>
          <ul className="border-b border-gray-300 mb-8">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className="flex items-center px-2 md:px-8 lg:px-16 mb-6 justify-center">
            <PriceCard text="예상 최소 처리비용" price={totalPrice} />
          </div>
        </>
      )}
    </section>
  );
}

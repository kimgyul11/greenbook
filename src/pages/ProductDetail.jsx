import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";
import { useAuthContext } from "../context/AuthContext";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const { user } = useAuthContext();
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, content, category, price },
    },
  } = useLocation();
  const [success, setSuccess] = useState();

  const handleClick = () => {
    if (!user) {
      setSuccess("로그인 후 사용할 수 있습니다!");
      return;
    }
    const product = {
      id,
      image,
      title,
      content,
      category,
      price,
      quantity: 1,
    };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess("휴지통에 추가 되었습니다.");
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      },
    });
  };
  const navigate = useNavigate();
  const handlerHistory = () => {
    navigate(-1);
  };
  return (
    <>
      <section className="flex  flex-col p-4 max-w-4xl text-center justify-center items-center m-auto h-full mt-20">
        <img className="w-48 h-48 p-2 " src={image} alt={title} />
        <div className="w-full flex flex-col p-4 items-center">
          <div className="w-48 rounded-md border border-zinc-200 p-2">
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="text-sm text-gray-600">예상 처리 비용 : {price}원</p>
            <p className="text-sm text-gray-600">분류 : {category}</p>
          </div>
          <div className="contentArea">
            <p>{content}</p>
          </div>
          {success && <p className="my-2">{success}</p>}
          <div className="flex">
            <button
              onClick={handlerHistory}
              className={"rounded-full w-10  text-white bg-red-300 mx-6"}
            >
              ⬅️
            </button>

            <Button text="휴지통에 넣기♻️" onClick={handleClick} />
          </div>
        </div>
      </section>
    </>
  );
}

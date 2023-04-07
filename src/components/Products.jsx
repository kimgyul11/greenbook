import React, { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import Search from "./Search";

//초성 검색
function getChosung(str) {
  const firstLetters = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];

  let result = "";
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i) - 44032; // 한글 유니코드 시작값(44032)을 뺀다
    if (code > -1 && code < 11172) {
      result += firstLetters[Math.floor(code / 588)];
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}
export default function Products() {
  const [val, setVal] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const inputHandler = (e) => {
    setVal(e.target.value);
  };

  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  //검색 자동완성 기능
  useEffect(() => {
    if (!products) {
      setFilteredProducts([]);
      return;
    }
    const filtered = products.filter((product) =>
      getChosung(product.title).includes(getChosung(val))
    );
    setFilteredProducts(filtered);
  }, [val, products]);
  if (isLoading) return;
  return (
    <>
      <Search onChange={inputHandler} />
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-2 md:grid-cols-5 lg-grid-cols-5 gap-4 p-4">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}

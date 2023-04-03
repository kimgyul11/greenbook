import React, { useState } from "react";
import Products from "../components/Products";
import Banner from "../components/Banner";
import { getProducts } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import LifeProducts from "../components/productComponent/LifeProducts";

export default function Home() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);
  const [item, setItem] = useState("");

  const onChange = (e) => {
    const searchName = e.target.value;
    setItem(searchName);
  };

  return (
    <>
      <Banner />
      <Products />
    </>
  );
}

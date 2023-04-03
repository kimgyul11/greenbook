import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

export default function AllProducts() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2 gap-4 p-6 text-center ">
      <CategoryCard
        img="https://cdn-icons-png.flaticon.com/512/3239/3239565.png"
        onClick={() => {
          navigate("/products/life");
        }}
        title="생활 폐기물"
      >
        음식물,의류,서적 등 일상 생활에서 사용되는 쓰레기들이 모여있습니다.
      </CategoryCard>
      <CategoryCard
        img="https://cdn-icons-png.flaticon.com/512/4643/4643222.png"
        onClick={() => {
          navigate("/products/electronics");
        }}
        title="대형 폐기물"
      >
        냉장고,TV,컴퓨터,옷장과 같은 대형 폐기물을 확인 해 볼 수 있습니다.
      </CategoryCard>
      <CategoryCard
        img="https://cdn-icons-png.flaticon.com/512/9306/9306128.png"
        onClick={() => {
          navigate("/products/architecture");
        }}
        title="건축 폐기물"
      >
        페인트,건축자재 등 건축 폐기물에 대해 알려드립니다!
      </CategoryCard>
      <CategoryCard
        img="https://cdn-icons-png.flaticon.com/512/3906/3906643.png"
        onClick={() => {
          navigate("/products/pathogen");
        }}
        title="의학 폐기물"
      >
        주사기,의학용 도구 등 처리하기 어려운 폐기물을 확인해 보세요.
      </CategoryCard>
    </div>
  );
}

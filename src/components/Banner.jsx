import React from "react";

export default function Banner() {
  return (
    <section className="bannerWrap h-96 relative">
      <div className="absolute w-full top-32 text-center text-gray-50 ">
        <h2 className="text-4xl font-bold text-white">지구를 위한 생활 습관</h2>
        <h2 className="text-4xl font-bold text-white">지구를 위한 작은 실천</h2>
      </div>
    </section>
  );
}

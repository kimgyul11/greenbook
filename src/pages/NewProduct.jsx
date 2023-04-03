import React, { useState } from "react";
import { uploadImage } from "../api/uploader";
import Button from "../components/ui/Button";
import useProducts from "../hooks/useProducts";
export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log(name, value, files);
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    setIsUploading(true);
    //1.제품의 사진을 Cloudinary에 업로드 하고, URL획득
    uploadImage(file) //
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("성공적으로 제품이 추가 되었습니다.");
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          }
        );
        //이미지 url을 받아와서 파이어 베이스에 등록해준다.
      })
      .finally(() => setIsUploading(false));

    //2.Firebase에 새로운 제품을 추가한다.
  };
  const keyDownHandler = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      let val = e.target.value;
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;
      e.target.value = val.substring(0, start) + "\t" + val.substring(end);
      e.target.selectionStart = e.target.selectionEnd = start + 1;
      return false; //  prevent focus
    }
  };
  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold m-4">등록하기</h2>
      {success && <p className="my-2">✅{success}</p>}
      {file && (
        <img
          className="w-64 h-64 mx-auto mb-2 rounded-full"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form
        className="flex flex-col px-12 max-w-3xl m-auto mb-14"
        onSubmit={handleSubmit}
      >
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="폐기물 이름"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ""}
          placeholder="처리 비용"
          required
          onChange={handleChange}
        />

        <select name="category" onChange={handleChange}>
          <option value="대형폐기물">대형폐기물</option>
          <option value="생활폐기물">생활폐기물</option>
          <option value="산업폐기물">건축폐기물</option>
          <option value="의학폐기물">의학폐기물</option>
        </select>
        <textarea
          name="content"
          onKeyDown={keyDownHandler}
          onChange={handleChange}
        ></textarea>
        <Button
          text={isUploading ? "업로드중 ..." : "제품 등록하기"}
          disable={isUploading}
        />
      </form>
    </section>
  );
}

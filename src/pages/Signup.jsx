import React from "react";

export default function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="이름" />
        <input type="email" placeholder="이메일 주소" />
        <input type="password" placeholder="비밀번호" />
        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
}

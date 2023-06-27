import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";
import Button from "./ui/Button";
import MiniButton from "./ui/MiniButton";
import User from "./User";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className="navbar flex justify-between border-b-2 h-20 p-2  text-sm font-semibold">
      <Link to="/" className="flex items-center  ">
        <img
          className="w-10"
          alt="그린북"
          src="https://cdn-icons-png.flaticon.com/512/1598/1598196.png"
        />
        <h1 className="text-xl">그린북</h1>
      </Link>
      <nav className="flex items-center gap-4">
        <Link to="/">HOME</Link>
        {/* <Link to="/">Q&A</Link> */}
        <Link to="/products">분리수거</Link>
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && <Link to="/products/new">추가</Link>}
        {user && <User user={user} />}

        {!user && <Button onClick={login} text="로그인" />}
        {user && <MiniButton onClick={logout} text="로그아웃" />}
      </nav>
    </header>
  );
}

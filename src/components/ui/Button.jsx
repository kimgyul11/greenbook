import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="
    
      rounded-md w-36 py-2 px-4 font-bold text-white bg-indigo-400 hover:scale-100 "
      onClick={onClick}
    >
      {text}
    </button>
  );
}

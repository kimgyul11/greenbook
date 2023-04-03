import React from "react";

export default function MiniButton({ text, onClick }) {
  return (
    <button className="miniButton" onClick={onClick}>
      <p>{text}</p>
    </button>
  );
}

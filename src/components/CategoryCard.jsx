import React from "react";
import styles from "./CategoryCard.module.css";
export default function CategoryCard({ img, children, title, onClick }) {
  return (
    <div className={styles.Wrap} onClick={onClick}>
      <p>{title}</p>
      <div className={styles.imgWrap}>
        <img src={img}></img>
      </div>
      <div>
        <span>{children}</span>
      </div>
    </div>
  );
}

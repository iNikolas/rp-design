import React from "react";
import css from "./CSSLoader.module.css";

function CSSLoader() {
  return (
    <div className={`${css["lds-ellipsis"]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default CSSLoader
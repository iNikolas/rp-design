import React from "react";
import logo from "../Logo.png";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css["logo-wrapper-div"]}>
      <img className={css["logo-img"]} src={logo} alt={"Loaders Logo"} />
    </div>
  );
}

export default Loader;

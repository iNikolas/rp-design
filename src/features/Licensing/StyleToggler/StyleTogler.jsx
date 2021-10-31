import React, { useEffect, useState } from "react";
import horSilhouette from "./knife-silouette-horizontal.png";
import vertSilhouette from "./knife-silouette-vertical.png";
import css from "./StyleToggler.module.css";
import PropTypes from "prop-types";

function StyleToggler({ style, setStyle }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", listenScreenSizeChange);
    return () => window.removeEventListener("resize", listenScreenSizeChange);
  }, []);

  function listenScreenSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  const additionalBtn = width > height;
  useEffect(() => {
    if (!additionalBtn) setStyle("one-entry-style");
  }, [additionalBtn]);

  const handleBtnClick = (action) => () => {
    setStyle(action);
  };

  return (
    <div className={css["btn-wrapper"]}>
      <span className={css["btn-block"]}>
        <button
          onClick={handleBtnClick("one-entry-style")}
          className={style === "one-entry-style" ? css["active"] : ""}
        >
          <img className={css["horizontal-img"]} src={horSilhouette} />
          <img className={css["horizontal-img"]} src={horSilhouette} />
          <img className={css["horizontal-img"]} src={horSilhouette} />
        </button>
        <button
          className={style === "two-entry-style" ? css["active"] : ""}
          onClick={handleBtnClick("two-entry-style")}
        >
          <img className={css["vertical-img"]} src={vertSilhouette} />
          <img className={css["vertical-img"]} src={vertSilhouette} />
        </button>
      </span>
      {additionalBtn && (
        <span className={css["btn-block"]}>
          <button
            className={style === "three-entry-style" ? css["active"] : ""}
            onClick={handleBtnClick("three-entry-style")}
          >
            <img className={css["vertical-img"]} src={vertSilhouette} />
            <img className={css["vertical-img"]} src={vertSilhouette} />
            <img className={css["vertical-img"]} src={vertSilhouette} />
          </button>
          <button
            className={style === "four-entry-style" ? css["active"] : ""}
            onClick={handleBtnClick("four-entry-style")}
          >
            <img className={css["vertical-img"]} src={vertSilhouette} />
            <img className={css["vertical-img"]} src={vertSilhouette} />
            <img className={css["vertical-img"]} src={vertSilhouette} />
            <img className={css["vertical-img"]} src={vertSilhouette} />
          </button>
          <button
            className={style === "five-entry-style" ? css["active"] : ""}
            onClick={handleBtnClick("five-entry-style")}
          >
            <img className={css["vertical-img"]} src={vertSilhouette} />
            <img className={css["vertical-img"]} src={vertSilhouette} />
            <img className={css["vertical-img"]} src={vertSilhouette} />
            <img className={css["vertical-img"]} src={vertSilhouette} />
            <img className={css["vertical-img"]} src={vertSilhouette} />
          </button>
        </span>
      )}
    </div>
  );
}

StyleToggler.propTypes = { setStyle: PropTypes.func, style: PropTypes.string };

export default StyleToggler;

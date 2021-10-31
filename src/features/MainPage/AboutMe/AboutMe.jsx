import React, { useCallback, useContext, useState } from "react";
import { LanguageContext } from "../../../common/languageContext";
import { useSelector } from "react-redux";
import css from "./AboutMe.module.css";

function AboutMe() {
  const [, language] = useContext(LanguageContext);
  const aboutMe = useSelector((state) => state.mainContent.aboutMe);
  const [hiddenLeftStile, setHiddenLeftStile] = useState(
    css["hidden-left-side"]
  );
  const [hiddenRightStile, setHiddenRightStile] = useState(
    css["hidden-right-side"]
  );

  const handleObserverCreationLeft = useCallback((element) => {
    const observerLeft = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setHiddenLeftStile("");
        observerLeft.disconnect();
      }
    });
    if (element) observerLeft.observe(element);
  }, []);

  const handleObserverCreationRight = useCallback((element) => {
    const observerRight = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setHiddenRightStile("");
        observerRight.disconnect();
      }
    });
    if (element) observerRight.observe(element);
  }, []);

  const content = aboutMe.description[language].map((p, index) => (
    <p key={index} className={`${css["main-content"]} ${hiddenLeftStile}`}>
      {p}
    </p>
  ));
  return (
    <article className={css["container"]}>
      <header className={css["main-header"]}>
        {aboutMe.sectionHeader[language]}
      </header>
      <div className={css["flex-container"]}>
        <div ref={handleObserverCreationLeft}>{content}</div>
        <div
          ref={handleObserverCreationRight}
          className={css["photo-container"]}
        >
          <img
            className={`${css["photo"]} ${hiddenRightStile}`}
            src={aboutMe.photo}
          />
        </div>
      </div>
    </article>
  );
}

export default AboutMe;

import React, { useContext } from "react";
import { LanguageContext } from "../../common/languageContext";
import css from "./ToggleLanguage.module.css";

function ToggleLanguage() {
  const [, language, setLanguage] = useContext(LanguageContext);
  const handleLanguageChange = () => {
    setLanguage(language === "eng" ? "rus" : "eng");
  };
  return (
    <div className={css["onoffswitch1"]}>
      <input onChange={handleLanguageChange} type="checkbox" name="onoffswitch1" className={css["onoffswitch1-checkbox"]} id="myonoffswitch1" checked={language === 'eng'}/>
        <label className={css["onoffswitch1-label"]} htmlFor="myonoffswitch1">
          <span className={css["onoffswitch1-inner"]}></span>
          <span className={css["onoffswitch1-switch"]}></span>
        </label>
    </div>
  );
}

export default ToggleLanguage;

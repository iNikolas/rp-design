import React, { useContext } from "react";
import PropTypes from "prop-types";
import css from "./DetailedDescription.module.css";
import { LanguageContext } from "../../../common/languageContext";

function DetailedDescription({
  name,
  knifeMainDescription,
  knifeVerboseDescription,
}) {
  const [{ KnivesParametersTranslation }, language] =
    useContext(LanguageContext);
  const { year, type, color, handle } = knifeMainDescription;
  const {
    overallLength,
    bladeLength,
    bladeThickness,
    handleThickness,
    bearing,
    lockType,
    weight,
  } = knifeVerboseDescription;

  return (
    <div className={css["main-wrapper"]}>
      {name[language] && (
        <header className={`${css.header} ${css["main-header"]}`}>
          {name[language]}
        </header>
      )}
      <section className={css["main-description"]}>
        {year && <span>{year + " "}</span>}
        {type[language] && <span>{type[language]}</span>}
        {color[language] && <span>{color[language]}</span>}
        {handle[language] && <span>{handle[language]}</span>}
      </section>
      <header className={css.header}>
        {KnivesParametersTranslation.DESCRIPTION}
      </header>
      <section className={css["verbose-description"]}>
        {overallLength[language] && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.OVERALL_LENGTH}
            </span>
            <span>{overallLength[language] + ". "}</span>
          </div>
        )}
        {bladeLength[language] && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.BLADE_LENGTH}
            </span>
            <span>{bladeLength[language] + ". "}</span>
          </div>
        )}
        {bladeThickness[language] && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.BLADE_THICKNESS}
            </span>
            <span>{bladeThickness[language] + ". "}</span>
          </div>
        )}
        {handleThickness[language] && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.HANDLE_THICKNESS}
            </span>
            <span>{handleThickness[language] + ". "}</span>
          </div>
        )}
        {bearing[language] && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.BEARING}
            </span>
            <span>{bearing[language] + ". "}</span>
          </div>
        )}
        {lockType[language] && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.LOCK_TYPE}
            </span>
            <span>{lockType[language] + ". "}</span>
          </div>
        )}
        {weight[language] && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.WEIGHT}
            </span>
            <span>{weight[language] + ". "}</span>
          </div>
        )}
      </section>
    </div>
  );
}

DetailedDescription.propTypes = {
  knifeMainDescription: PropTypes.object,
  knifeVerboseDescription: PropTypes.object,
  name: PropTypes.object,
};

export default DetailedDescription;

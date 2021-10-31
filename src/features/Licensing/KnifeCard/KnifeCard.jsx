import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LanguageContext } from "../../../common/languageContext";
import css from "./KnifeCard.module.css";
import { useHistory, useRouteMatch } from "react-router-dom";

function KnifeCard({
  img,
  overallLength,
  bladeLength,
  bladeThickness,
  handleThickness,
  bearing,
  lockType,
  weight,
  name,
  year,
  type,
  color,
  handle,
  style,
  index,
  id,
}) {
  const [{ KnivesParametersTranslation }] = useContext(LanguageContext);
  const history = useHistory();
  const match = useRouteMatch();

  const handleCardClick = () => {
    history.push(match.path + "/" + id);
  };
  return (
    <div
      onClick={handleCardClick}
      className={`${css["main-wrapper"]} ${css[style]}`}
    >
      {name && (
        <header
          className={`${css["knife-name"]} ${
            index === 0 ? css["first-header"] : ""
          }`}
        >
          {name}
        </header>
      )}
      <img className={`${css["card-image"]}`} src={img} alt="knife image" />
      <section className={css["main-description"]}>
        {year && <span>{year + " "}</span>}
        {type && <span>{type}</span>}
        {color && <span>{color}</span>}
        {handle && <span>{handle}</span>}
      </section>
      <section className={`${css["verbose-description"]} ${css[style]}`}>
        {overallLength && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.OVERALL_LENGTH}
            </span>
            <span>{overallLength + ". "}</span>
          </div>
        )}
        {bladeLength && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.BLADE_LENGTH}
            </span>
            <span>{bladeLength + ". "}</span>
          </div>
        )}
        {bladeThickness && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.BLADE_THICKNESS}
            </span>
            <span>{bladeThickness + ". "}</span>
          </div>
        )}
        {handleThickness && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.HANDLE_THICKNESS}
            </span>
            <span>{handleThickness + ". "}</span>
          </div>
        )}
        {bearing && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.BEARING}
            </span>
            <span>{bearing + ". "}</span>
          </div>
        )}
        {lockType && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.LOCK_TYPE}
            </span>
            <span>{lockType + ". "}</span>
          </div>
        )}
        {weight && (
          <div>
            <span className={css["parameter-caption"]}>
              {KnivesParametersTranslation.WEIGHT}
            </span>
            <span>{weight + ". "}</span>
          </div>
        )}
      </section>
    </div>
  );
}

KnifeCard.propTypes = {
  img: PropTypes.string,
  overallLength: PropTypes.string,
  bladeLength: PropTypes.string,
  bladeThickness: PropTypes.string,
  handleThickness: PropTypes.string,
  bearing: PropTypes.string,
  lockType: PropTypes.string,
  weight: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.number,
  type: PropTypes.string,
  color: PropTypes.string,
  handle: PropTypes.string,
  style: PropTypes.string,
  index: PropTypes.number,
  id: PropTypes.number,
};

export default KnifeCard;

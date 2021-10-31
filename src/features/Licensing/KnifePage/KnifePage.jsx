import React, { useContext, useMemo } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { LanguageContext } from "../../../common/languageContext";
import css from "./KnifePage.module.css";
import KnifeCarousel from "./KnifeCarousel/KnifeCarousel";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import DetailedDescription from "../DetailedDescription/DetailedDescription";
import VisitedHistory from "./VisitedHistory/VisitedHistory";

function KnifePage({ storePartition }) {
  const [{ KnifePageTranslation }] = useContext(LanguageContext);
  const prevPage = useRouteMatch().path.match(/[^:]+/)[0];
  const { id } = useParams();
  const knivesList = useSelector((state) => state[storePartition].knives);
  const knife = useMemo(
    () => knivesList.find((knifeData) => knifeData.id === +id),
    [id]
  );

  return (
    <div className={css["main-wrapper"]}>
      <Link className={css["back-link"]} to={prevPage}>
        {'← ' + KnifePageTranslation.BACK}
      </Link>
      <KnifeCarousel knifePhotos={knife.images} />
      <DetailedDescription
        name={knife.name}
        knifeMainDescription={knife.mainDescription}
        knifeVerboseDescription={knife.verboseDescription}
      />
      <VisitedHistory storePartition={storePartition} id={id} />
    </div>
  );
}

KnifePage.propTypes = {
  storePartition: PropTypes.string,
};

export default KnifePage;

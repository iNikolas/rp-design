import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import css from "./VisitedHistory.module.css";
import { LanguageContext } from "../../../../common/languageContext";
import PropTypes from "prop-types";
import useViewedHistory from "../../../../common/hooks/useViewedHistory";
import Pagination from "react-bootstrap/Pagination";
import Image from "react-bootstrap/Image";
import Popover from "react-bootstrap/Popover";

function VisitedHistory({ storePartition, id }) {
  const [, language] = useContext(LanguageContext);
  const knivesVisitedHistory = useViewedHistory(storePartition, id);
  const [{ KnifePageTranslation }] = useContext(LanguageContext);
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const thumbnailsContainer = useRef();
  const rootPage = useRouteMatch().path.match(/[^:]+/)[0];
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("resize", calcMaxOffset);
    return () => window.removeEventListener("resize", calcMaxOffset);
  });

  function calcMaxOffset() {
    setMaxOffset(
      () =>
        thumbnailsContainer.current.scrollWidth -
        thumbnailsContainer.current.clientWidth
    );
  }

  const thumbnails = useMemo(
    () =>
      knivesVisitedHistory.map((knife) => (
        <OverlayTrigger
          key={knife.id}
          placement="top"
          overlay={
            <Popover id={`popover-positioned-${knife.id}`}>
              <Popover.Header as="h3">{knife.name[language]}</Popover.Header>
              <Popover.Body>
                {knife.mainDescription.year && (
                  <span>{knife.mainDescription.year + " "}</span>
                )}
                {knife.mainDescription.type[language] && (
                  <span>{knife.mainDescription.type[language]}</span>
                )}
                {knife.mainDescription.color[language] && (
                  <span>{knife.mainDescription.color[language]}</span>
                )}
                {knife.mainDescription.handle[language] && (
                  <span>{knife.mainDescription.handle[language]}</span>
                )}
              </Popover.Body>
            </Popover>
          }
        >
          <Image
            onClick={() => history.push(rootPage + knife.id)}
            className={css["thumbnail-image"]}
            src={knife.image}
            thumbnail
          />
        </OverlayTrigger>
      )),
    [knivesVisitedHistory, language]
  );

  const handleShifting = (direction) => () => {
    const step = 0.34;
    setMaxOffset(
      () =>
        thumbnailsContainer.current.scrollWidth -
        thumbnailsContainer.current.clientWidth
    );

    if (direction === "right") {
      const newOffset = offset - step;
      setOffset(newOffset > -1 ? newOffset : -1);
    }
    if (direction === "left") {
      const newOffset = offset + step;
      setOffset(newOffset < 0 ? newOffset : 0);
    }
  };

  return (
    <div>
      {knivesVisitedHistory.length && (
        <>
          <header className={`${css.header} ${css["product-header"]}`}>
            {KnifePageTranslation.RECENTLY_VIEWED}
          </header>
          <div className={css["thumbnails-dashboard-container"]}>
            {offset !== 0 && (
              <Pagination.Prev onClick={handleShifting("left")} />
            )}
            <div
              style={{ transform: `translateX(${offset * maxOffset}px)` }}
              ref={thumbnailsContainer}
              className={`${css["thumbnails-container"]}`}
            >
              {thumbnails}
            </div>
            {offset !== -1 && (
              <Pagination.Next onClick={handleShifting("right")} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

VisitedHistory.propTypes = {
  storePartition: PropTypes.string,
  id: PropTypes.string,
};

export default VisitedHistory;

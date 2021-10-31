import React, { useState } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import css from "./KnifeCarousel.module.css";
import ModalImagePopup from "./ModalImagePopup/ModalImagePopup";

function KnifeCarousel({ knifePhotos }) {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState("");

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleModalImageShow = (photo) => () => {
    setImg(photo);
    setShowModal(true);
  };

  const handleImgClick = (imageIndex) => () => setIndex(imageIndex);

  const CarouselItems = knifePhotos.map((photo, index) => (
    <Carousel.Item key={photo}>
      <img
        onClick={handleModalImageShow(photo)}
        className={`d-block w-100 ${css["carousel-image"]}`}
        src={photo}
        alt={`photo number ${index}`}
      />
    </Carousel.Item>
  ));

  const images = knifePhotos.map((photo, thumbnailIndex) => (
    <img
      key={photo}
      className={`${css["image-preview"]} ${
        thumbnailIndex === index ? css["active"] : ""
      }`}
      onClick={handleImgClick(thumbnailIndex)}
      src={photo}
    />
  ));

  return (
    <div className={css["main-wrapper"]}>
      <div className={css.carousel}>
        <Carousel
          controls={false}
          indicators={false}
          pause={false}
          variant="dark"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {CarouselItems}
        </Carousel>
      </div>
      <div className={css["thumbnail-container"]}>{images}</div>
      <ModalImagePopup show={showModal} setShow={setShowModal} img={img} />
    </div>
  );
}

KnifeCarousel.propTypes = {
  knifePhotos: PropTypes.array,
};

export default KnifeCarousel;

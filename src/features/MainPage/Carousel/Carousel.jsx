import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { LanguageContext } from "../../../common/languageContext";
import { useSelector } from "react-redux";
import css from "./Carousel.module.css";

function MainCarousel() {
  const [, language] = useContext(LanguageContext);
  const slides = useSelector((state) => state.carousel.slides);
  const carouselItems = slides.map((slide) => (
    <Carousel.Item key={slide.img}>
      <img
        className={`d-block w-100 ${css.img}`}
        src={slide.img}
        alt={slide[`caption_${language}`].paragraph}
      />
      <Carousel.Caption>
        <h3>{slide[`caption_${language}`].header}</h3>
        <p>{slide[`caption_${language}`].paragraph}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return (
    <Carousel
      className={css["carousel-container"]}
      variant="dark"
      fade
      pause={false}
    >
      {carouselItems}
    </Carousel>
  );
}

export default MainCarousel;

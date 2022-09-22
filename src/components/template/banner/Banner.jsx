import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Banner.css";

function Banner() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 992, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      containerClass="banner-container"
      dotListClass="banner-carousel-dots"
      itemClass="banner-carousel-item"
      arrows={false}
      showDots
      infinite
    >
      <img src="/src/assets/images/bg.jpg" alt="Banner slider 1" />
      <img src="/src/assets/images/bg.jpg" alt="Banner slider 2" />
      <img src="/src/assets/images/bg.jpg" alt="Banner slider 3" />
      <img src="/src/assets/images/bg.jpg" alt="Banner slider 4" />
    </Carousel>
  );
}

export default Banner;

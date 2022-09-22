import React from "react";
import "./products.css";
import ProductCard from "@/components/cards/ProductCard.jsx";
import useGetProducts from "@/hooks/products/useGetProducts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Products() {
  const { products } = useGetProducts();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 992, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  return (
    <section className="products-container">
      <h3 className="products-title">Más vendidos</h3>
      <div className="products-divider"></div>
      <Carousel
        responsive={responsive}
        containerClass="products-carousel-container"
        dotListClass="products-carousel-dots"
        itemClass="products-carousel-item"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots
        infinite
      >
        {
          products.map((product) => (
            <ProductCard product={product} key={product.productId}/>
          ))
        }
      </Carousel>
    </section>
  );
}

export default Products;

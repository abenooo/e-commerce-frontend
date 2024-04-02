"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

// carousal setting
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    slidesToShow: 2, // Default number of slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Width up to 768px
        settings: {
          slidesToShow: 1, // Show 1 slide for screens smaller than 768px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Width up to 1024px and above
        settings: {
          slidesToShow: 2, // Show 2 slides for screens larger than 768px
          slidesToScroll: 1,
        },
      },
    ],
  };
  // data
  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => {
            return (
              <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.title}
                price={item.price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

import React from "react";
import ProductCard from "./ProductCard";
const Product = () => {
  const productsData = [
    {
      img: "/jacket-1.jpg",
      title: "Jacket",
      desc: "New men jacket",
      rating: 4,
      price: "45.00",
    },
    {
      img: "/jacket-2.jpg",
      title: "Jacket",
      desc: "New men jacket",
      rating: 3,
      price: "55.00",
    },
    {
      img: "/skirt-1.jpg",
      title: "Jacket",
      desc: "New men jacket",
      rating: 3,
      price: "55.00",
    },
    {
      img: "/party-wear-1.jpg",
      title: "JacPartyket",
      desc: "New men jacket",
      rating: 5,
      price: "25.00",
    },
    {
      img: "/shirt-1.jpg",
      title: "Shirt",
      desc: "New men jacket",
      rating: 3,
      price: "55.00",
    },
    {
      img: "/sports-1.jpg",
      title: "Sports",
      desc: "New men jacket",
      rating: 5,
      price: "65.00",
    },
    {
      img: "/watch-1.jpg",
      title: "Watches",
      desc: "New men jacket",
      rating: 5,
      price: "95.00",
    },
    {
      img: "/watch-2.jpg",
      title: "Watches",
      desc: "New men jacket",
      rating: 5,
      price: "95.00",
    },
  ];

  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Product</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-20">
          {productsData.map((item, index) => {
            return <ProductCard 
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating= {item.rating}
            price={item.price}
            />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;

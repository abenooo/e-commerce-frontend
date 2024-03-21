import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ProductComponet = ({ title, img, desc, rating, price }) => {
  // functio to display the rating in start
  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

      case 3:
        return (
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
    }
  };

  return (
    <div>
      <div>
        <Image src={img} width={200} height={300} alt="title" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div>{rating}</div>
      <div>
        <p> {price}</p>
      </div>
    </div>
  );
};

export default ProductComponet;

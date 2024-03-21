import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ProductCard = ({ title, img, desc, rating, price }) => {
  // functio to display the rating in start
  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]" >
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
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
    <div className="px-4 border border-l-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={300}
          alt="title"
        />
      </div>
      <div className="space-y-2 py-2">
        <h1 className="text-accent font-medium uppercase">{title}</h1>
        <p className="">{desc}</p>
        <div>{generateRating(rating)}</div>
      </div>
      <div>
        {price}
        <del className="text-gray-500 font-normal ml-3">
          ${parseInt(price) + 50} .00
        </del>
      </div>
    </div>
  );
};

export default ProductCard;

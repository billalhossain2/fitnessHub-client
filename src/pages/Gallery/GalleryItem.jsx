import React from "react";
import { FaRegHeart } from "react-icons/fa6";
const GalleryItem = ({item}) => {
  const {image, exercise, likes, difficulty_level} = item || {};
  return (
    <div className="border-[1px] border-gray-300 p-3 rounded-md flex flex-col justify-between">
      <img
        className="rounded-lg h-48"
        src={image}
        alt="Galler Image"
      />

      <div className="flex justify-between py-5">
        <div>
          <h3 className="font-semibold text-[20px]">{exercise}</h3>
          <p className="text-gray-400">{difficulty_level}</p>
        </div>
        <div className="flex flex-col items-end text-gray-400">
          <FaRegHeart className="text-2xl" />
          <p>{likes} Likes</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;

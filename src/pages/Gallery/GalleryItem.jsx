import React from "react";
import { FaRegHeart } from "react-icons/fa6";
const GalleryItem = () => {
  return (
    <div className="border-[1px] border-gray-300 p-3 rounded-md">
      <img
        className="rounded-lg"
        src="https://i.ibb.co/7Jv70sd/wellness-couch.jpg"
        alt="Galler Image"
      />

      <div className="flex justify-between py-5">
        <div>
          <h3 className="font-semibold text-[20px]">Shoulder Press</h3>
          <p className="text-gray-400">Coordination</p>
        </div>
        <div className="flex flex-col items-end text-gray-400">
          <FaRegHeart className="text-2xl" />
          <p>55 Likes</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;

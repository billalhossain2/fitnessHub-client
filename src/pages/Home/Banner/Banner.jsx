import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[500px]"
        src="https://i.ibb.co/R9vqHPw/gallery.png"
        alt="Gallery"
      />
      <div className="absolute top-0 flex flex-col justify-center bg-black bg-opacity-80 w-full h-full">
      <div className="space-y-10 md:ml-10 ml-3">
        <h3 className="text-5xl font-bold md:text-6xl">
          <p className="text-white mb-1">Shape</p>
          <p className="text-[#FF4D31]">Your Body</p>
        </h3>
        <p className="text-gray-200 md:w-[400px] w-full">
          Transform your body with our 'FitnessHub' service. Unleash your
          potential, achieve fitness goals, and embrace a healthier lifestyle.
          Start your journey to a stronger, confident you!
        </p>
        <Link to="/classes">
        <button className="bg-[#FF4D31] px-4 py-2 font-bold text-white rounded-md mt-10">
          Explore Classes
        </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Banner;

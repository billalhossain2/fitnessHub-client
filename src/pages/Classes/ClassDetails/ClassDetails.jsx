import React from "react";
import {
  MdAccessTime,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import useTitle from "../../../hooks/useTitle";
import { SlCalender } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import useLoadData from "../../../hooks/useLoadData";

const ClassDetails = () => {
  useTitle("FitnessHub | Class Details");
  const {classId} = useParams();
  console.log("Class Id===========> ", classId)

  const {loading, error, data} = useLoadData(`classes/${classId}`);
  const {classTitle, category, image, startTime, startDate, location} = data || {};
  console.log("Class Details==========> ", data)

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[500px] rounded-3xl"
          src={image}
          alt="Gallery"
        />
        <div className="absolute bg-black rounded-3xl bg-opacity-50 top-0 w-full h-full text-white flex items-center font-bold">
          <div className="md:ml-10 ml-3 space-y-5">
            <h3 className="md:text-6xl text-4xl">{classTitle}</h3>
            <p className="text-2xl flex md:flex-row flex-col md:items-center">
              {category}
              <MdOutlineKeyboardDoubleArrowRight className="text-[#FF4D31] mx-1" />
              Cardio Blast{" "}
              <MdOutlineKeyboardDoubleArrowRight className="text-[#FF4D31] mx-1" />
              {classTitle}
            </p>
          </div>
        </div>
      </div>

      {/* instructor image  */}
      <div className="my-3">
        <div className="flex gap-5 items-center">
          <p className="flex items-center gap-1">
            <MdAccessTime className="text-3xl" />
            {startTime}
          </p>
          <p className="flex items-center gap-1">
            <SlCalender />
            {startDate}
          </p>
        </div>
      </div>
      <hr />

      {/* Description section  */}
      <div className="flex lg:flex-row flex-col-reverse items-center gap-5 mt-5">
        <div className="lg:flex-1">
          <p className="mb-5">
            <span className="text-6xl text-[#448C74] font-bold">F</span>itness training is a crucial aspect of maintaining a healthy and
            active lifestyle. It involves a structured regimen of physical
            activities designed to enhance various components of fitness,
            including cardiovascular endurance, strength, flexibility, and
            balance. Whether you are a beginner or a seasoned fitness
            enthusiast, incorporating a well-rounded training program into your
            routine can yield numerous benefits.
          </p>

          <p className="mb-5">
            Cardiovascular exercises, such as running, cycling, or swimming,
            elevate your heart rate, improve circulation, and boost overall
            cardiovascular health. Strength training, on the other hand, focuses
            on building and toning muscles, enhancing metabolism, and promoting
            bone density. Flexibility exercises, like yoga or stretching
            routines, increase range of motion, reduce the risk of injuries, and
            contribute to better posture.
          </p>

          <p className="mb-5">
            A balanced fitness training program not only improves physical
            health but also positively impacts mental well-being. Regular
            exercise releases endorphins, often referred to as "feel-good"
            hormones, which can alleviate stress, anxiety, and depression.
            Additionally, the sense of accomplishment and increased self-esteem
            that comes with achieving fitness goals can enhance overall quality
            of life.
          </p>
          <p>
          To make the most of fitness training, it's essential to tailor your routine to your individual goals, fitness level, and preferences. Consulting with fitness professionals, such as personal trainers or healthcare providers, can help create a personalized plan that aligns with your needs and ensures a safe and effective fitness journey. Whether it's at the gym, home, or outdoors, committing to regular fitness training is an investment in your long-term health and well-being.
          </p>
        </div>

        <div className="border-[1px] border-gray-500 p-10 rounded-2xl bg-[#448C74] lg:w-[300px] w-full">
          <h3 className="text-[#DEC267] font-bold text-[18px]">
            Date and Time
          </h3>
          <p className="text-white font-medium my-2">{startDate}</p>
          <p className="text-white font-medium my-2">{startTime}</p>
          <h3 className="text-[#DEC267] font-bold text-[18px] mt-10">
            Location
          </h3>
          <p className="text-white font-medium my-2">{location}</p>
          <h3 className="text-[#DEC267] font-bold text-[18px] mt-10">
            Event Category
          </h3>
          <p className="text-white font-medium my-2">{category}</p>
          <Link to="/trainer">
          <button className="px-4 py-2 border-[1px] border-white hover:bg-[#FF4D31] hover:border-[#FF4D31] duration-300 rounded-lg mt-10 text-white">
            Join Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;

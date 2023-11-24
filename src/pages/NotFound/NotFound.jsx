import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai"
import useTitle from '../../hooks/useTitle';
function NotFound() {
  useTitle("FitnessHum | Not Found")
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center flex flex-col justify-center items-center">
        <img
          src="https://i.ibb.co/NtrGVjC/not-found-img.jpg"
          alt="404 Not Found"
          className="w-64 h-64 mb-8"
        />
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-8">The page you are looking for does not exist.</p>
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-lg flex gap-1 items-center max-w-[150px]">
          <AiOutlineHome className='text-2xl'></AiOutlineHome>
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

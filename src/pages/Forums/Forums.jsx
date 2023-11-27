import { useEffect, useState } from "react";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import useTitle from "../../hooks/useTitle";
import ForumItem from "./ForumItem";
import "./Forums.css"
import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "../../hooks/useAxiosInstance";
const Forums = () => {
  useTitle("FitnessHub | Forums");
  const axiosInstance = useAxiosInstance();

  // pagination
  const [forums, setForums] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    fetch("http://localhost:9000/forums")
      .then((res) => res.json())
      .then((data) => setCount(data.length));
  }, []);


  useEffect(() => {
    setLoading(true)
    fetch(
      `http://localhost:9000/forums?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setForums(data)
        setLoading(false)
        setError("")
      });
  }, [currentPage, itemsPerPage]);

  if(loading){
    return <Spinner></Spinner>
  }

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[500px] rounded-3xl"
          src="https://i.ibb.co/b2xqh63/forum.png"
          alt="Forum cover"
        />
        <p className="absolute bg-black bg-opacity-70 top-0 w-full h-full text-white font-bold md:text-7xl text-4xl flex items-center justify-center rounded-3xl">
          Our Forums
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {forums.map((forum) => (
          <ForumItem key={forum._id} forum={forum}></ForumItem>
        ))}
      </div>

      {/* pagination  */}
      <div className="pagination">
        <button onClick={handlePrevPage}>Prev</button>
        {pages.map((page) => (
          <button
            className={`${currentPage === page ? "bg-[#FF4D31] text-white" : undefined} mx-1 border-[#FF4D31] border-[1px] px-5 py-2 rounded-md text-[#FF4D31]`}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page+1}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
        <select
          className="bg-[#FF4D31] px-5 py-3 text-white rounded-md"
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">6</option>
          <option value="10">15</option>
          <option value="20">20</option>
          <option value="50">30</option>
        </select>
      </div>
    </div>
  );
};

export default Forums;

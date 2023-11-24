import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxAlignCenterVertically, RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import {BsMoonStars, BsSun} from "react-icons/bs"
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
  const { user, signOutUser } = useAuth();
  console.log("User===========>", user)
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const hanleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success("Logout success", { autoClose: 1000 });
        navigate("/")
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 1000 });
      });
  };

  const handleThemeToggle = ()=>{

  }

  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
         <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/trainer">Trainer</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Community</NavLink>
      </li>
      </>
  );
  const userNavList = user ? (
    <>
      <li>
        <NavLink to="/user">
          <img
            className="w-10 h-10 rounded-full border-solid border-2 border-[#2A41E8] p-1"
            src={user?.photoURL}
            alt=""
          />
        </NavLink>
      </li>
      <li>
        <button onClick={hanleLogout}>Logout</button>
      </li>
    </>
  ) : (
   <>
    <li className="desktop">
      <NavLink to="/login">Login</NavLink>
    </li>
    <li className="desktop">
      <NavLink to="/signup">Register</NavLink>
    </li>
   </>
  );
  return (
    <div className={`relative}`}>
      <nav className="flex items-center shadow-lg">
        <Link to="/">
          <div className="flex items-center md:gap-3 gap-1 border-r-[1px] border-r-solid border-r-gray-400 md:p-5 p-2">
            <img
              src="https://i.ibb.co/rkb9Wb3/fitness-transparent-logo.png"
              alt="Fitness Hub Logo"
            />
            <h3 className="font-bold md:text-3xl">FitnessHub</h3>
          </div>
        </Link>

        <ul className="desktop lg:flex lg:flex-row flex-col gap-10 font-semibold p-5 flex-1 hidden">
          {navList}
        </ul>

        <ul className="flex md:gap-10 md:p-5 gap-2 p-2 font-bold lg:flex-none flex-1">
          {userNavList}
        </ul>

        <div className="lg:hidden">
          <FaBars
            onClick={handleShowMenu}
            className="me-2 text-2xl cursor-pointer"
          ></FaBars>
        </div>

        {/* Mobile Menu  */}
        <div
          className={`absolute z-50 shadow-lg rounded-lg top-0 right-0 w-full duration-700 ${
            showMenu ? "top-0" : "top-[-900px]"
          }`}
        >
          <ul className="mobile flex lg:flex-row flex-col font-semibold flex-1 lg:hidden bg-[#2A2A2A] text-white">
            <p className="flex justify-end p-1">
              <RxCross1
                onClick={handleShowMenu}
                className="font-bold text-3xl cursor-pointer border-2 border-solid border-white"
              ></RxCross1>
            </p>
            <div className="flex items-center md:gap-3 gap-1 border-r-[1px] border-r-solid border-r-gray-400 md:p-5 p-2">
              <Link to="/">
                <img
                  src="https://i.ibb.co/rkb9Wb3/fitness-transparent-logo.png"
                  alt="Fitness Hub"
                />
              </Link>
              <h3 className="font-bold md:text-3xl">FitnessHub</h3>
              <ul className="flex items-center md:gap-10 md:p-5 gap-2 p-2 font-bold">
                {userNavList}
              </ul>
            </div>
            {navList}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

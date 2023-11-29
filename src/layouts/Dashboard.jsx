import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

import { MdManageHistory } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineLocalActivity } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";

import { FaHome } from "react-icons/fa";

import { MdCardMembership } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { GiDiscussion } from "react-icons/gi";
import useRole from "../hooks/useRole";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  // TODO: load dynamic status of user from database
  // const [isAdmin, isAdminLoading] = useAdmin();
  const {user} = useAuth()
  const path = useLocation()?.pathname;

  const { isLoading, error, data: role } = useRole();

  if (isLoading) {
    return <h1>Loading................</h1>;
  }

  const adminLinks = (
    <>
      <li>
        <NavLink to="/dashboard/all-subscribers">
          <FaUsers className="text-2xl"></FaUsers>All Subscribers
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/all-trainers">
          <FaUsersCog className="text-2xl"></FaUsersCog>All Trainers
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/applied-trainers">
          <FaCashRegister className="text-2xl"></FaCashRegister>Applied Trainers
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/add-new-forum">
          <FaCashRegister className="text-2xl"></FaCashRegister>Add New Forum
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/balance">
          <FaSackDollar className="text-2xl"></FaSackDollar>Balance
        </NavLink>
      </li>
    </>
  );

  const trainerLinks = (
    <>
      <li>
        <NavLink to="/dashboard/manage-slots">
          <MdManageHistory className="text-2xl"></MdManageHistory>Manage Slots
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manage-members">
          <MdCardMembership className="text-2xl"></MdCardMembership>Manage
          Members
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/add-new-forum">
          <MdOutlineForum className="text-2xl"></MdOutlineForum>Add New Forum
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/add-new-class">
          <GiDiscussion className="text-2xl"></GiDiscussion>Add New Class
        </NavLink>
      </li>
    </>
  );

  const memberLinks = (
    <>
      <li>
        <NavLink to="/dashboard/activity-log">
          <MdOutlineLocalActivity className="text-2xl"></MdOutlineLocalActivity>
          Activity Log
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/profile-settings">
          <MdOutlineSettings className="text-2xl"></MdOutlineSettings>Profile
          Settings
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/recommended-classes">
          <SiGoogleclassroom className="text-2xl"></SiGoogleclassroom>Recomended
          Classes
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary bg-orange-500 text-white hover:bg-orange-700 drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {path==="/dashboard" && 
        <h1 className="text-3xl text-gray-600 font-medium">Welcome Back, {user?.displayName}</h1>}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-80 min-h-full bg-[#C8D96F] p-4">
          {/* Sidebar content here */}
          {role==="admin" ?  adminLinks  : role==="trainer" ? trainerLinks : memberLinks }
          {/* divider  */}
          <div className="divider"></div>
          <Link to="/">
             <p className="flex gap-1 items-center"><FaHome className="text-2xl"></FaHome>Home</p>
          </Link> 
        </ul>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Dashboard;

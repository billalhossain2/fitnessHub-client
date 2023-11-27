import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../layouts/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";
import NotFound from "../pages/NotFound/NotFound";
import Gallery from "../pages/Gallery/Gallery";
import Trainer from "../pages/Trainer/Trainer";
import Classes from "../pages/Classes/Classes";
import TrainerForm from "../pages/Trainer/TrainerForm";
import TrainerDetails from "../pages/Trainer/TrainerDetails";
import Forums from "../pages/Forums/Forums";
import InfiniteScrollUi from "../pages/InfiniteScroll/InfiniteScroll";
import ClassDetails from "../pages/Classes/ClassDetails/ClassDetails";
import PrivateRoute from "./PrivateRoute";
import AllSubscribers from "../pages/Dashboard/Admin/AllSubscribers/AllSubscribers";
import AllTrainers from "../pages/Dashboard/Admin/AllTrainers/AllTrainers";
import AppliedTrainers from "../pages/Dashboard/Admin/AppliedTrainers/AppliedTrainers";
import Balance from "../pages/Dashboard/Admin/Balance/Balance";
import ActivityLog from "../pages/Dashboard/Members/ActivityLog/ActivityLog";
import ProfileSettings from "../pages/Dashboard/Members/ProfileSettings/ProfileSettings";
import RecommendedClasses from "../pages/Dashboard/Members/RecommendedClasses/RecommendedClasses";
import ManageSlots from "../pages/Dashboard/Trainers/ManageSlots/ManageSlots";
import ManageMembers from "../pages/Dashboard/Trainers/ManageMembers/ManageMembers";
import AddForum from "../pages/Dashboard/Trainers/AddForum/AddForum";
import AddClass from "../pages/Dashboard/Trainers/AddClass/AddClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/gallery",
        element:<Gallery></Gallery>
      },
      {
        path:"/trainer",
        element:<Trainer></Trainer>
      },
      {
        path:"/trainer-form",
        element:<PrivateRoute><TrainerForm></TrainerForm></PrivateRoute>
      },
      {
        path:"/trainer-details/:trainerId",
        element:<TrainerDetails></TrainerDetails>
      },
      {
        path:"/classes",
        element:<Classes></Classes>
      },
      {
        path:"/class-details",
        element:<ClassDetails></ClassDetails>
      },
      {
        path:"/forums",
        element:<Forums></Forums>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/infinite-scroll",
        element:<InfiniteScrollUi></InfiniteScrollUi>
      },
    ]
  },

  {
    path:"/dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:"/dashboard/all-subscribers",
        element:<AllSubscribers></AllSubscribers>
      },
      {
        path:"/dashboard/all-trainers",
        element:<AllTrainers></AllTrainers>
      },
      {
        path:"/dashboard/applied-trainers",
        element:<AppliedTrainers></AppliedTrainers>
      },
      {
        path:"/dashboard/balance",
        element:<Balance></Balance>
      },
      {
        path:"/dashboard/activity-log",
        element:<ActivityLog></ActivityLog>
      },
      {
        path:"/dashboard/profile-settings",
        element:<ProfileSettings></ProfileSettings>
      },
      {
        path:"/dashboard/recommended-classes",
        element:<RecommendedClasses></RecommendedClasses>
      },
      {
        path:"/dashboard/manage-slots",
        element:<ManageSlots></ManageSlots>
      },
      {
        path:"/dashboard/manage-members",
        element:<ManageMembers></ManageMembers>
      },
      {
        path:"/dashboard/add-new-forum",
        element:<AddForum></AddForum>
      },
      {
        path:"/dashboard/add-new-class",
        element:<AddClass></AddClass>
      },
    ]
  }
]);

export default router;

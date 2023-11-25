import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../layouts/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
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
        element:<TrainerForm></TrainerForm>
      },
      {
        path:"/trainer-details",
        element:<TrainerDetails></TrainerDetails>
      },
      {
        path:"/classes",
        element:<Classes></Classes>
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
      }
    ]
  },

  {
    path:"/dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"/dashboard/admin-home",
        element:<AdminHome></AdminHome>
      },
      {
        path:"/dashboard/user-home",
        element:<UserHome></UserHome>
      },
    ]
  }
]);

export default router;

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./home/Home";

import Shop from "./shop/Shop";
// import About from "./components/About";
import SingleBook from "./shop/SingleBook";
import DashboardLayout from "./dashboard/DashboardLayout";
import { Dashboard } from "./dashboard/Dashboard";
import { UploadBook } from "./dashboard/UploadBook";
import { ManageBooks } from "./dashboard/ManageBooks";
import { EditBooks } from "./dashboard/Editbooks";
import { AuthProvider } from "./context/AuthProvider";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { Logout } from "./components/Logout";
import { Contact } from "./components/Contact";
import AboutPage from "./components/About";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/about",
        element:<AboutPage/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/book/:id",
        element:<SingleBook/>,
        loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
      }
    ]
  },
  {
      path:"admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard/></PrivateRoute>,
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>,
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]   
  },
  {
    path:"sign-up",
    element:<SignUp/>
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"logout",
    element:<Logout/>

  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);
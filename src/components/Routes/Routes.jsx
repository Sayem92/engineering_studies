import { createBrowserRouter } from "react-router-dom";
import AboutUS from "../Home/AboutUS/AboutUS";
import Blog from "../Home/Blog/Blog";
import Contact from "../Home/Contact/Contact";
import Home from "../Home/Home";
import Studies from "../Home/Studies/Studies";
import Main from "../Layout/Main";
import CE from "../Pages/CE/CE";
import CourseName from "../Pages/CourseName/CourseName";
import CSE from "../Pages/CSE/CSE";
import EEE from "../Pages/EEE/EEE";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/studies",
        element: <Studies></Studies>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/aboutUs",
        element: <AboutUS></AboutUS>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      // all studies route
      {
        path: "/studies/cse",
        element: <CSE></CSE>,
      },
      {
        path: "/studies/eee",
        element: <EEE></EEE>,
      },
      {
        path: "/studies/ce",
        element: <CE></CE>,
      },
      // course name
      {
        path: "/studies/cse/1stSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/cse/2ndSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/cse/3rdSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/cse/4thSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/cse/5thSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/cse/6thSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/cse/7thSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/cse/8thSemester",
        element: <CourseName></CourseName>,
      },
      // eee semester start ------------
      {
        path: "/studies/eee/1stSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/eee/2ndSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/eee/3rdSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/eee/4thSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/eee/5thSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/eee/6thSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/eee/7thSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/eee/8thSemester",
        element: <CourseName></CourseName>,
      },
      // ce semester start -------------------------------
      {
        path: "/studies/ce/1stSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/ce/2ndSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/ce/3rdSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/ce/4thSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/ce/5thSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/ce/6thSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/ce/7thSemester",
        element: <CourseName></CourseName>,
      },
      {
        path: "/studies/ce/8thSemester",
        element: <CourseName></CourseName>,
      },
      
    ],
  },
]);

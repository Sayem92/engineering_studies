import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import AboutUS from "../Home/AboutUS/AboutUS";
import Blog from "../Home/Blog/Blog";
import BlogDetails from "../Home/Blog/BlogDetails";
import Contact from "../Home/Contact/Contact";
import Home from "../Home/Home";
import Studies from "../Home/Studies/Studies";
import Main from "../Layout/Main";
import CE from "../Pages/CE/CE";
import CourseName from "../Pages/CourseName/CourseName";
import CSE from "../Pages/CSE/CSE";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import EEE from "../Pages/EEE/EEE";
import PL from "../Pages/PL/PL";
import PLDetailsPage from "../Pages/PL/PLDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      //          👉👉all studies route👉👉   
      {
        path: "/studies/pl",
        element: <PL></PL>,
      },
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

      //              👉👉  course name👉👉
      //➡️ pl semester star
      {
        path: "/studies/pl/:languageName",
        // loader: ({params})=> fetch(`http://localhost:5000/pl/${params.languageName}`),
        element: <PLDetailsPage></PLDetailsPage>,
      },
      //➡️ cse semester start 
      {
        path: "/studies/cse/:semesterName",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cse/${params.semesterName}`),
        element: <CourseName></CourseName>,
      },

      //➡️ eee semester start 
      {
        path: "/studies/eee/:semesterName",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/eee/${params.semesterName}`),
        element: <CourseName></CourseName>,
      },
      //➡️ ce semester start 
      {
        path: "/studies/ce/:semesterName",
        // loader: ({params})=> fetch(`http://localhost:5000/ce/${params.semesterName}`),
        element: <CourseName></CourseName>,
      },
      

      // ➡️details file pdf
      // categoryName === eee1stSemester
      {
        path: "/studies/:categoryName",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/studies/${params.categoryName}`),
        element: <DetailsPage></DetailsPage>,
      },

      //          👉👉all blog post 👉👉 
      {
        path: "/blog/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blog/${params.id}`),
        element: <BlogDetails></BlogDetails>,
      },
    ],
  },
]);

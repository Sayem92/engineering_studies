import { createBrowserRouter } from "react-router-dom";
import AboutUS from "../Home/AboutUS/AboutUS";
import Blog from "../Home/Blog/Blog";
import Contact from "../Home/Contact/Contact";
import Home from "../Home/Home";
import Studies from "../Home/Studies/Studies";
import Main from "../Layout/Main";
import CE from "../Pages/CE/CE";
import CSE from "../Pages/CSE/CSE";
import EEE from "../Pages/EEE/EEE";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/home",
            element: <Home></Home>
        },
        {
            path: "/studies",
            element: <Studies></Studies>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path: "/aboutUs",
            element: <AboutUS></AboutUS>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        // all studies route
        {
            path: "/studies/cse",
            element: <CSE></CSE>
        },
        {
            path: "/studies/eee",
            element: <EEE></EEE>
        },
        {
            path: "/studies/ce",
            element: <CE></CE>
        },
    ]
  },
]);

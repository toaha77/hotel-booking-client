import {
    createBrowserRouter,
   } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import Contact from "../Component/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import Events from "../pages/Events/Events";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/rooms',
          element: <Rooms></Rooms>,
          loader: ()=>fetch('/data.json')
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/gallery',
          element: <Gallery></Gallery>
        },
        {
          path: '/events',
          element: <Events></Events>
        }
      ]
    },
  ]);

  export default router
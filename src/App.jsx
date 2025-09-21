import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLaypot from "./layouts/app-layout";
import AboutUS from "./pages/about-us/AboutUS";
import CollegeNotification from "./pages/college-notification/CollegeNotification";
import GovtJobs from "./pages/govt-jobs/GovtJobs";
import OurServices from "./pages/our-services/OurServices";
import JobDetail from "./pages/job-detail/JobDetail";

const router = createBrowserRouter([
  {
    element: <AppLaypot />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUS />,
      },
      {
        path: "/college-notification",
        element: <CollegeNotification />,
      },
      {
        path: "/govt-jobs",
        element: <GovtJobs />,
      },
      {
        path: "/our-services",
        element: <OurServices />,
      },
      {
        path: "/job",
        element: <JobDetail />,
      },
      {
        path: "/jobs",
        element: <JobDetail />,
      },
      {
        path: "/college-detail",
        element: <JobDetail />,
      },
    ],
  },
]);

const App = () => {
  

  return <RouterProvider router={router} />;
};

export default App;

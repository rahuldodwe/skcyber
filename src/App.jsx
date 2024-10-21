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
import { API_KEY } from "./data";

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
    ],
  },
]);

const App = () => {
  const [latestJob, setlatestJob] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchJobList() {
    const url = "https://sarkari-result.p.rapidapi.com/scrape/latestjob";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ab6fffcdffmshe20aa9437e25573p12c572jsn16ca5b66f527",
        "x-rapidapi-host": "sarkari-result.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchJobList();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;

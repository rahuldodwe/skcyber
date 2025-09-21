import { createContext, useEffect, useState } from "react";
import { collegeNotificationsApi } from "../api/collegeApi";
import { govtJobsApi } from "../api/govtJobsApi";

export const DataContext = createContext(null);

function DataProvider({ children }) {
  const [latestJobList, setLatestJobList] = useState([]);
  const [resultList, setResultList] = useState([]);
  const [admitCardList, setAdmitCardResultList] = useState([]);
  const [collegeResultList, setCollegeResultList] = useState([]);
  const [collegeAdmitCardList, setCollegeAdmitCardList] = useState([]);
  const [collegeExamFormList, setCollegeExamFormList] = useState([]);
  const [govtJobResultList, setGovtJobResultList] = useState([]);
  const [govtJobAdmitCardList, setGovtJobAdmitCardList] = useState([]);
  const [govtJobLatestNotificationList, setGovtJobLatestNotificationList] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCHING RESULT LIST
  async function fetchResultList() {
    const url = "https://sarkari-result.p.rapidapi.com/scrape/result";
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
      // console.log(result);

      if (result && result?.result) {
        setResultList(result?.result);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchResultList();
  }, []);

  // FETCHING ADMIT-CARD LIST
  async function fetchAdmitCardtList() {
    const url = "https://sarkari-result.p.rapidapi.com/scrape/admitcard";
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
      // console.log(result);

      if (result && result?.result) {
        setAdmitCardResultList(result?.result);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAdmitCardtList();
  }, []);

  // FETCHING LATEST JOB LIST
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
      // console.log(result);

      if (result && result?.result) {
        setLatestJobList(result?.result);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchJobList();
  }, []);

  // FETCHING COLLEGE RESULTS
  async function fetchCollegeResults() {
    try {
      const result = await collegeNotificationsApi.getCollegeResults();
      if (result && result?.result) {
        setCollegeResultList(result?.result);
      }
    } catch (error) {
      console.error("Error fetching college results:", error);
    }
  }

  // FETCHING COLLEGE ADMIT CARDS
  async function fetchCollegeAdmitCards() {
    try {
      const result = await collegeNotificationsApi.getCollegeAdmitCards();
      if (result && result?.result) {
        setCollegeAdmitCardList(result?.result);
      }
    } catch (error) {
      console.error("Error fetching college admit cards:", error);
    }
  }

  // FETCHING COLLEGE EXAM FORMS
  async function fetchCollegeExamForms() {
    try {
      const result = await collegeNotificationsApi.getCollegeExamForms();
      if (result && result?.result) {
        setCollegeExamFormList(result?.result);
      }
    } catch (error) {
      console.error("Error fetching college exam forms:", error);
    }
  }

  useEffect(() => {
    fetchCollegeResults();
    fetchCollegeAdmitCards();
    fetchCollegeExamForms();
  }, []);

  // FETCHING GOVERNMENT JOB RESULTS
  async function fetchGovtJobResults() {
    try {
      const result = await govtJobsApi.getGovtJobResults();
      if (result && result?.result) {
        setGovtJobResultList(result?.result);
      }
    } catch (error) {
      console.error("Error fetching government job results:", error);
    }
  }

  // FETCHING GOVERNMENT JOB ADMIT CARDS
  async function fetchGovtJobAdmitCards() {
    try {
      const result = await govtJobsApi.getGovtJobAdmitCards();
      if (result && result?.result) {
        setGovtJobAdmitCardList(result?.result);
      }
    } catch (error) {
      console.error("Error fetching government job admit cards:", error);
    }
  }

  // FETCHING GOVERNMENT JOB LATEST NOTIFICATIONS
  async function fetchGovtJobLatestNotifications() {
    try {
      const result = await govtJobsApi.getGovtJobLatestNotifications();
      if (result && result?.result) {
        setGovtJobLatestNotificationList(result?.result);
      }
    } catch (error) {
      console.error("Error fetching government job latest notifications:", error);
    }
  }

  useEffect(() => {
    fetchGovtJobResults();
    fetchGovtJobAdmitCards();
    fetchGovtJobLatestNotifications();
  }, []);

  // console.log(resultList);
  // console.log(latestJobList);
  // console.log(admitCardList);
  // console.log(collegeResultList);
  // console.log(collegeAdmitCardList);
  // console.log(collegeExamFormList);
  // console.log(govtJobResultList);
  // console.log(govtJobAdmitCardList);
  // console.log(govtJobLatestNotificationList);

  return (
    <DataContext.Provider value={{ 
      resultList, 
      latestJobList, 
      admitCardList,
      collegeResultList,
      collegeAdmitCardList,
      collegeExamFormList,
      govtJobResultList,
      govtJobAdmitCardList,
      govtJobLatestNotificationList
    }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;

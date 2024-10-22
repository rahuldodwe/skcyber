import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

function DataProvider({ children }) {
  const [latestJobList, setLatestJobList] = useState([]);
  const [resultList, setResultList] = useState([]);
  const [admitCardList, setAdmitCardResultList] = useState([]);
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

  // console.log(resultList);
  // console.log(latestJobList);
  // console.log(admitCardList);

  return (
    <DataContext.Provider value={{ resultList, latestJobList, admitCardList }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;

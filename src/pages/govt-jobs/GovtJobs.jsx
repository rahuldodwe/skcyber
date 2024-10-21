import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const GovtJobs = () => {
  const [latestJobList, setLatestJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);


  // FETCHING LATEST JOB LIST
  async function fetchJobList() {
    const url = `https://sarkari-result.p.rapidapi.com/scrape/latestjob?limit=10&skip=0`;
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

  return (
    <>
      {/* <!----------------GOVT-JOB-START-----------------> */}
      <div>
        <center>
          <h1 className="color-line">Government - Jobs</h1>
        </center>
      </div>
      <div className="container">
        <table>
          <tr>
            <td className="table-dt">
              <a href="https://www.sarkariresult.com/upsc/upsc-otr-registration/">
                UPSC OTR 2022 Registration
              </a>
            </td>

            <td className="table-dt">
              <a href="https://www.sarkariresult.com/ssc/ssc-cpo-si-2022/">
                SSC CPO SI 2022 Apply Online
              </a>
            </td>

            <td className="table-dt">
              <a href="https://www.sarkariresult.com/2022/army-agniveer-rally/">
                Army Agniveer Apply Online
              </a>
            </td>

            <td className="table-dt">
              <a href="https://www.sarkariresult.com/ssc/ssc-junior-engineer-je-2022/">
                SSC Junior Engineer Apply Online
              </a>
            </td>
          </tr>

          <tr>
            <td className="table-dt">
              <a href="https://www.sarkariresult.com/force/coast-guard-ac-02-2023/">
                Coast Guard AC Apply Online
              </a>
            </td>

            <td className="table-dt">
              <a href="https://www.sarkariresult.com/upsssc/upsssc-mukhya-sevika-05-22/">
                Apply Online UPSSSC Mukhya Sevika Apply Online
              </a>
            </td>

            <td className="table-dt">
              <a href="https://www.sarkariresult.com/ssc/ssc-stenographer-2022/">
                SSC Stenographer 2022 Apply Online
              </a>
            </td>

            <td className="table-dt">
              <a href="https://www.sarkariresult.com/2022/railway-group-d-admit-card/">
                Railway Group D Exam City / Admit Card
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-4">
            <h4 className="tbl-h">Result</h4>
            <div className="b">
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  Delhi High Court Judicial Services Mains Result 2022
                </a>
              </div>
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  Delhi High Court Judicial Services Mains Result 2024
                </a>
              </div>
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  RPSC AE Civil, Revenue & Executive Officer Online Form 2024
                </a>
              </div>
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  Delhi High Court Judicial Services Mains Result 2024
                </a>
              </div>
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  Delhi High Court Judicial Services Mains Result 2024
                </a>
              </div>
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  Delhi High Court Judicial Services Mains Result 2024
                </a>
              </div>
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  Delhi High Court Judicial Services Mains Result 2024
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sep">
            <h4 className="tbl-h">Admit Card</h4>
            <div className="b">
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  Delhi High Court Judicial Services Mains Result 2022
                </a>
              </div>
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  Delhi High Court Judicial Services Mains Result 2024
                </a>
              </div>
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  RPSC AE Civil, Revenue & Executive Officer Online Form 2024
                </a>
              </div>
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  Delhi High Court Judicial Services Mains Result 2024
                </a>
              </div>
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  Delhi High Court Judicial Services Mains Result 2024
                </a>
              </div>
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  Delhi High Court Judicial Services Mains Result 2024
                </a>
              </div>
              <div className="jobs">
                <FaArrowRightLong className="arrow" />
                <a className="job-text">
                  Delhi High Court Judicial Services Mains Result 2024
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sep">
            <h4 className="tbl-h">Latest Jobs</h4>
            <div className="b">
              {latestJobList && latestJobList.length > 0 ? (
                latestJobList.map((singleJob,index) => (
                  <div key={index} className="jobs">
                    <FaArrowRightLong className="arrow" />
                    <a
                      target="blank"
                      href={singleJob?.href}
                      className="job-text"
                    >
                      {singleJob?.text}
                    </a>
                  </div>
                ))
              ) : (
                <h1>Loading...</h1>
              )}
            </div>
          </div>
        </div>
        {/* <hr style="height: 2px; color: black; background-color: gray;"> */}
        <center>
          <form>
            <button className="button-reg">See More..</button>
          </form>
        </center>
      </div>
      <br />
      {/* <!----------------GOVT-JOB-END-----------------> */}
    </>
  );
};

export default GovtJobs;

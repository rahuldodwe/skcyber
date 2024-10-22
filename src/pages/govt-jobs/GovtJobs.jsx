import React, { useContext, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { DataContext } from "../../context/Context";

const GovtJobs = () => {
  const { resultList, latestJobList, admitCardList } = useContext(DataContext);

  // Slice 20 Items
  const admitCardSlice = admitCardList.slice(0, 20);
  // console.log(admitCard50);

  const resultSlice = resultList.slice(0, 20);
  // console.log(admitCard50);

  const jobSlice = latestJobList.slice(0, 20);
  // console.log(jobSlice);

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
              {resultSlice && resultSlice.length > 0 ? (
                resultSlice.map((singleResult, index) => (
                  <div key={index} className="jobs">
                    <FaArrowRightLong className="arrow" />
                    <a
                      target="blank"
                      href={singleResult?.href}
                      className="job-text"
                    >
                      {singleResult?.text}
                    </a>
                  </div>
                ))
              ) : (
                <h1 className="text-center pt-3">Data Loading...</h1>
              )}
            </div>
          </div>

          <div className="col-md-4 col-sep">
            <h4 className="tbl-h">Admit Card</h4>
            <div className="b">
              {admitCardSlice && admitCardSlice.length > 0 ? (
                admitCardSlice.map((singleCard, index) => (
                  <div key={index} className="jobs">
                    <FaArrowRightLong className="arrow" />
                    <a
                      target="blank"
                      href={singleCard?.href}
                      className="job-text"
                    >
                      {singleCard?.text}
                    </a>
                  </div>
                ))
              ) : (
                <h1 className="text-center pt-3">Data Loading...</h1>
              )}
            </div>
          </div>
          <div className="col-md-4 col-sep">
            <h4 className="tbl-h">Latest Jobs</h4>
            <div className="b">
              {jobSlice && jobSlice.length > 0 ? (
                jobSlice.map((singleJob, index) => (
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
                <h1 className="text-center pt-3">Data Loading...</h1>
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

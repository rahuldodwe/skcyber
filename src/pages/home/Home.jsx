import React, { useContext, useState } from "react";
import "./home.css";
import Slider from "../../components/home-slider/Slider";
import cpct_img1 from "../../assets/cpct0.jpg";
import basic_img from "../../assets/c-basic0.jpg";
import aadhar_img from "../../assets/aadhar.png";
import hitgrahi_img from "../../assets/Hitgrahi-Panjiyan.jpg";
import money_img from "../../assets/money.png";
import ticket_img from "../../assets/ticket1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { DataContext } from "../../context/Context";
import AdmissionForm from "../../components/admission-form/AdmissionForm";

const Home = () => {
  const { resultList, latestJobList, admitCardList } = useContext(DataContext);
  const [openForm, setOpenForm] = useState(false);

  function handleOpenForm() {
    setOpenForm(!openForm);
    
  }

  function onClose() {
    setOpenForm(false);
  }

  // Slice 20 Items
  const admitCardSlice = admitCardList.slice(0, 15);
  // console.log(admitCard50);

  const resultSlice = resultList.slice(0, 15);
  // console.log(admitCard50);

  const jobSlice = latestJobList.slice(0, 15);
  // console.log(jobSlice);
  return (
    <>
      <div className="slider-bg">
        <Slider />
      </div>
      <center>
        <h1 className="color-line">Welcome To SK-Cyber</h1>
      </center>
      {/* ----------CPCT SECTION START--------------- */}
      <div className="container-fluid">
        <div className="row cl-blue">
          <div className="col-md-5">
            <div className="cp-img-cont">
              <img className="cpimg" src={cpct_img1} alt="" />
            </div>
          </div>

          <div className="col-md-7">
            <div className="cpct">
              <h2 className="cpct-h">● CPCT</h2>
              <p className="cpct-p">
                Computer Proficiency & Certification Test (CPCT) has been
                initiated in the State to assess Computer Proficiency and Typing
                Skills of aspirants of Government jobs. Computer Based Online
                examination assesses the competencies using Multi Choice
                Questions (MCQ) based assessment and Typing test (English &
                Hindi Typing).
              </p>
            </div>
            <center>
              <button className="button-reg" onClick={handleOpenForm}>
              <a>Get Admission</a>
              </button>
              
            </center>
          </div>
          <hr />
        </div>
      </div>
      {/* ----------CPCT SECTION END--------------- */}

      {openForm && <AdmissionForm onClose={onClose} />}

      {/* ----------Basic Computer SECTION END--------------- */}
      <div className="container-fluid">
        <div className="row basic-blue">
          <div className="col-md-7">
            <div className="basic">
              <h2 className="cpct-h">● Basic Computer</h2>
              <p className="cpct-p">
                Computer classes teach you essential work skills. Different
                computer programs like Microsoft Suite help with tasks like
                writing, organizing documents, presentations, and spreadsheets.
                These are all essential skills for jobs today and can be used in
                across industries.
              </p>
            </div>
            <center>
              <button className="button-reg desk">
                <a>Get Admission</a>
              </button>
            </center>
          </div>

          <div className="col-md-5">
            <div className="basic-img-cont">
              <img className="cpimg" src={basic_img} alt="" />
            </div>
            <center>
              <button className="button-reg mob btn">
                <a>Get Admission..</a>
              </button>
            </center>
          </div>
        </div>
      </div>
      {/* ----------Basic Computer SECTION END--------------- */}

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

      {/* <!----------------College-Notifications-START----------------> */}
      <div>
        <div>
          <center>
            <h1 className="color-line">College Notifcations</h1>
          </center>
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
          </div>
          {/* <hr style="height: 2px; color: black; background-color: gray;"> */}
          <center>
            <form>
              <button className="button-reg">See More..</button>
            </form>
          </center>
        </div>
      </div>
      {/* <!----------------College-Notifications-END----------------> */}

      {/* <!----------------Our Services-START----------------> */}
      <div>
        <div>
          <center>
            <h1 className="color-line">Our Services</h1>
          </center>
        </div>
        <div className="container-fluid bg-bl">
          <div className="row">
            {/* <!------row start-------> */}

            <div className="col-md-3">
              <center>
                <img src={aadhar_img} className="svc grow-shadow" />
                <h5 className="tex">Aadhar Card</h5>
              </center>
            </div>

            <div className="col-md-3">
              <center>
                <img src={hitgrahi_img} className="svc grow-shadow" />
                <h5 className="tex">Hitgrahi Panjiyan</h5>
              </center>
            </div>

            <div className="col-md-3">
              <center>
                <img src={money_img} className="svc grow-shadow" />
                <h5 className="tex">Money Transfer</h5>
              </center>
            </div>

            <div className="col-md-3">
              <center>
                <img src={ticket_img} className="svc grow-shadow" />
                <h5 className="tex">Ticket</h5>
              </center>
            </div>
          </div>
          <br />
          {/* <!-----------------row end -------> */}
        </div>

        <hr />
        <center>
          <form action="service.php">
            <button className="button-reg">See More..</button>
          </form>
        </center>
      </div>
      {/* <!----------------OOur Services-START----------------> */}
    </>
  );
};

export default Home;

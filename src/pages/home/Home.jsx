import React from "react";
import "./home.css";
import Slider from "../../components/home-slider/Slider";
import cpct_img1 from "../../assets/cpct0.jpg";

const Home = () => {
  return (
    <>
      <div className="slider-bg">
        <Slider />
      </div>
      <center>
        <h1 className="color-line">Welcome To SK-Cyber</h1>
      </center>
      {/* ----------CPCT SECTION START--------------- */}
      <div className="container-fluide">
        <div className="row cl-blue">
          <div className="col-md-6">
            <div className="cp-img-cont">
              <img className="cpimg" src={cpct_img1} alt="" />
            </div>
          </div>

          <div className="col-md-6">
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
              <button className="button-reg">
                <a>Get Admission..</a>
              </button>
            </center>
          </div>
          <hr />
        </div>
      </div>
      {/* ----------CPCT SECTION END--------------- */}

      {/* ----------Basic Computer SECTION END--------------- */}
      {/* <div className="container-fluide">
        <div className="row cl-blue">
          <div className="col-md-6">
            <div className="cpct">
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
                <a>Get Admission..</a>
              </button>
            </center>
          </div>

          <div className="col-md-6">
            <div className="w3-content w3-section">
              <img className="c-Slides" />
            </div>
            <center>
              <button className="button-reg mob">
                <a>Get Admission..</a>
              </button>
            </center>
          </div>
        </div>
      </div> */}
      {/* ----------Basic Computer SECTION END--------------- */}
    </>
  );
};

export default Home;

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
import Heading from "../../components/heading/Heading";
import NotificationTable from "../../components/NotificationTable/NotificationTable";
import TopNotificationTable from "../../components/TopNotificationTable/TopNotificationTable";

const Home = () => {
  const { 
    resultList, 
    latestJobList, 
    admitCardList,
    collegeResultList,
    collegeAdmitCardList,
    collegeExamFormList,
    govtJobResultList,
    govtJobAdmitCardList,
    govtJobLatestNotificationList
  } = useContext(DataContext);
  const [selectedForm, setSelectedForm] = useState(null);

  function handleOpenForm(form) {
    setSelectedForm(form);
  }

  function onClose() {
    setSelectedForm(null);
  }

  // Slice 20 Items
  const admitCardSlice = admitCardList.slice(0, 15);
  const resultSlice = resultList.slice(0, 15);
  const jobSlice = latestJobList.slice(0, 15);

  // College data slices
  const collegeResultSlice = collegeResultList.slice(0, 15);
  const collegeAdmitCardSlice = collegeAdmitCardList.slice(0, 15);
  const collegeExamFormSlice = collegeExamFormList.slice(0, 15);

  // Government job data slices (using dummy API data)
  const govtJobResultSlice = govtJobResultList.slice(0, 15);
  const govtJobAdmitCardSlice = govtJobAdmitCardList.slice(0, 15);
  const govtJobLatestNotificationSlice = govtJobLatestNotificationList.slice(0, 15);
  const govtJobTopNotificationSlice = govtJobLatestNotificationList.slice(0, 8); // For top table (2 rows of 4)

  const cpctForm = {
    title: "CPCT",
    fields: [
      "First Name",
      "Last Name",
      "Father Name",
      "Mobile Number",
      "Parmanent Address",
    ],
  };

  const basicCompForm = {
    title: "Basic Computer",
    fields: [
      "First Name",
      "Last Name",
      "Father Name",
      "Mobile Number",
      "Parmanent Address",
    ],
  };

  return (
    <>
      <div className="slider-bg">
        <Slider />
      </div>
      <Heading text="Welcome To SK-Cyber" />
      
      {/* ----------CPCT SECTION START--------------- */}
      <div className="container-fluid">
        <div className="row cl-blue">
          <div className="col-md-2"></div>
          <div className="col-md-3">
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
              {/* CPCT Admission Button */}
              <button
                className="button-reg"
                onClick={() => handleOpenForm(cpctForm)}
              >
                <a>Get Admission (CPCT)</a>
              </button>
            </center>
          </div>
          <div className="col-md-1"></div>
          <hr />
        </div>
      </div>
      {/* ----------CPCT SECTION END--------------- */}

      {/* ----------Basic Computer SECTION START--------------- */}
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
              <button
                className="button-reg"
                onClick={() => handleOpenForm(basicCompForm)}
              >
                <a>Get Admission (Basic Computer)</a>
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

      {/* AdmissionForm */}
      {selectedForm && (
        <div className="form-modal">
          <AdmissionForm formType={selectedForm} onClose={onClose} />
        </div>
      )}



      {/* <!----------------GOVT-JOB-START-----------------> */}
      <Heading text="Job Notifications" />

      <TopNotificationTable notificationList={govtJobLatestNotificationSlice} />

      {/* Job NotificationTable */}
      <NotificationTable 
        table1={govtJobResultSlice}
        table2={govtJobAdmitCardSlice}
        table3={{
          data: govtJobLatestNotificationSlice,
          navigationUrl: "/jobs"
        }}
        pageUrl="/govt-jobs"
        column1Title="Result"
        column2Title="Admit Card"
        column3Title="Latest Jobs"
      />
      <br />
      {/* <!----------------GOVT-JOB-END-----------------> */}



      {/* <!----------------College-Notifications-START----------------> */}
      <div>
        <Heading text="College Notifcations" />
        <TopNotificationTable notificationList={collegeExamFormSlice} />
        {/* College NotificationTable */}
        <NotificationTable 
          table1={collegeResultSlice} 
          table2={collegeAdmitCardSlice} 
          table3={{
            data: collegeExamFormSlice,
            navigationUrl: "/college-detail"
          }}
          pageUrl="/college-notification"
          column1Title="Result"
          column2Title="Admit Card"
          column3Title="Admission / Exam Forms"
        />
      </div>
      {/* <!----------------College-Notifications-END----------------> */}

      {/* <!----------------Our Services-START----------------> */}
      <div>
        <Heading text="Our Services" />
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
      {/* <!----------------Our Services-END----------------> */}
    </>
  );
};

export default Home;
